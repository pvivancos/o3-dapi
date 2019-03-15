import { wallet } from '@cityofzion/neon-js';
import { int2FixedDecimalStr, parseError } from '../utils';
import { Network, ErrorMsg } from '../constants';
import {
  fetchAddressBalances,
  fetchUTXO,
  fetchNEP5Tokens,
  AddressBalances,
  UTXO,
} from '../o3api';

interface BalanceRequest {
  address: string; // Address to check balance(s)
  assets?: string[]; // Asset symbol or script hash to check balance
  fetchUTXO?: boolean;
}

export interface GetBalanceArgs {
  params: BalanceRequest|BalanceRequest[];
  network: Network;
}

export interface BalanceResults {
  [address: string]: Balance[];
}

interface Balance {
  assetID: string;
  symbol: string;
  amount: string;
}

interface ParsedInput {
  [address: string]: {
    assets: string[],
    fetchUTXO: boolean,
  };
}

export default function getBalance({network, params}: GetBalanceArgs): Promise<BalanceResults> {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(params)) {
      params = [params];
    }

    params.forEach(({address, assets, fetchUTXO}, index) => {
      if (assets && !Array.isArray(assets)) {
        params[index] = {
          address,
          assets: [assets],
          fetchUTXO,
        };
      }
    });

    try {
      const parsedInput = parseInput(params);

      const uniqueAddresses = Object.keys(parsedInput);

      const balanceFetchPromiseList = uniqueAddresses.map(address => fetchAddressBalances(network, address));

      const balanceFetchPromiseAll = Promise.all(balanceFetchPromiseList);

      const utxoFetchPromiseList = uniqueAddresses.map(address => {
        if (!parsedInput[address].fetchUTXO) {
          return Promise.resolve({address, data: []});
        } else {
          return fetchUTXO(network, address)
          .then(data => ({address, data}));
        }
      });

      const utxoFetchPromiseAll = Promise.all(utxoFetchPromiseList);

      Promise.all([ balanceFetchPromiseAll, utxoFetchPromiseAll, fetchNEP5Tokens(network) ])
      .then(([balanceData, utxoData, nep5Tokens]) => Promise.all([
        parseBalances(balanceData),
        parseUtxo(utxoData),
        nep5Tokens,
      ]))
      .then(([balances, utxos, nep5Tokens]) => formatResponse(parsedInput, balances, utxos, nep5Tokens))
      .then(resolve)
      .catch(err => {
        reject({
          type: ErrorMsg.UNKNOWN_ERROR,
          description: parseError(err),
        });
      });
    } catch (err) {
      return reject({
        type: ErrorMsg.UNKNOWN_ERROR,
        description: parseError(err),
      });
    }
  });
}

function parseInput(data: BalanceRequest|BalanceRequest[] = []): ParsedInput {
  if (typeof data === 'string') {
    data = JSON.parse(data);
  }

  if (!Array.isArray(data)) {
    data = [data];
  }

  return data.reduce((accum, {address, assets, fetchUTXO}: BalanceRequest) => {
    if (accum[address] &&  accum[address].all) {
      return accum;
    }

    if (!assets) {
      return {
        ...accum,
        [address]: {
          all: true,
          fetchUTXO,
        },
      };
    }

    return {
      ...accum,
      [address]: {
        assets: [
          ...(accum[address] || []),
          ...assets,
        ],
        fetchUTXO,
      },
    };
  }, {});
}

function parseBalances(balanceData: AddressBalances[]) {
  const result = {};

  balanceData.forEach(data => {
    if (!data) {
      return;
    }
    const {assets, nep5Tokens, address} = data;

    assets.forEach(({id, symbol, value}) => {
      result[address] = [
        ...(result[address] || []),
        {
          assetID: id,
          symbol,
          amount: value,
        },
      ];
    });

    nep5Tokens.forEach(({id, symbol, value, decimals}) => {
      const parsedValue = int2FixedDecimalStr(Number(value), decimals);
      result[address] = [
        ...(result[address] || []),
        {
          assetID: id,
          symbol,
          amount: parsedValue,
        },
      ];
    });
  });

  return result;
}

function parseUtxo(utxoData: {address: string, data: UTXO[]}[]) {
  const result = {};

  utxoData.forEach(({address, data}) => {
    result[address] = data.reduce((accum, {asset, index, txid, value}) => {
      accum[asset] = [
        ...(accum[asset] || []),
        {
          n: index,
          txid,
          value,
        },
      ];
      return accum;
    }, {});
  });

  return result;
}

function formatResponse(parsedInput, balanceDataHash, utxos, nep5Tokens) {
  const result = {};

  Object.keys(parsedInput).forEach(address => {
    const input = parsedInput[address];
    let outputData = balanceDataHash[address];
    if (outputData) {
      outputData = outputData.map(balance => {
        try {
          if (utxos[address][balance.assetID]) {
            return {
              ...balance,
              unspent: utxos[address][balance.assetID],
            };
          }
          return balance;
        } catch (err) {
          return balance;
        }
      });
    }

    if (input.all) {
      result[address] = outputData;
    } else {
      const outputDataHashTable = outputData.reduce((accum, item) => {
        accum[item.assetID] = item;
        accum[item.symbol] = item;
        return accum;
      }, {});

      const nep5TokenHashTable = nep5Tokens.reduce((accum, item) => {
        const parsedItem = {
          assetID: item.tokenHash,
          symbol: item.symbol,
          amount: '0',
        };

        accum[item.tokenHash] = parsedItem;
        accum[item.symbol] = parsedItem;
        return accum;
      }, {});

      const uniqueInputs = Object.keys(input.assets.reduce((accum, item) => {
        accum[wallet.isScriptHash(item) ? item : item.toUpperCase()] = true;
        return accum;
      }, {}));

      result[address] = uniqueInputs.map(asset => (
        outputDataHashTable[asset] ||
        nep5TokenHashTable[asset]
      ));
    }
  });

  return result;
}
