import {
  Crypto,
  RestClient,
  utils,
  Oep4,
} from 'ontology-ts-sdk';
const {
  Address,
} = Crypto;
import { ErrorMsg, Network } from '../../constants';
import { parseError, getNetworkUrl, reverseHex2FixedNumStr } from '../../utils';

interface TokenDetailsInput {
  network: Network;
  scriptHash: string;
}

interface TokenDetailsOutput {
  name: string;
  symbol: string;
  decimals: string;
  totalSupply: string;
}

export function getTokenDetails({
  network,
  scriptHash,
}: TokenDetailsInput): Promise<TokenDetailsOutput> {
  return new Promise((resolve, reject) => {
    try {
      const url = getNetworkUrl(network);

      const parsedContractAddress = new Address(utils.reverseHex(scriptHash));
      const oep4 = new Oep4.Oep4TxBuilder(parsedContractAddress);
      const nameTx = oep4.queryName();
      const symbolTx = oep4.querySymbol();
      const decimalsTx = oep4.queryDecimals();
      const totalSupplyTx = oep4.queryTotalSupply();

      Promise.all([
        new RestClient(url).sendRawTransaction(nameTx.serialize(), true),
        new RestClient(url).sendRawTransaction(symbolTx.serialize(), true),
        new RestClient(url).sendRawTransaction(decimalsTx.serialize(), true),
        new RestClient(url).sendRawTransaction(totalSupplyTx.serialize(), true),
      ])
      .then(([
        nameResponse,
        symbolResponse,
        decimalsResponse,
        totalSupplyResponse,
      ]) => {
        if (nameResponse.Error) {
          reject({
            type: ErrorMsg.UNKNOWN_ERROR,
            description: parseError(nameResponse.Result),
          });
        }
        if (symbolResponse.Error) {
          reject({
            type: ErrorMsg.UNKNOWN_ERROR,
            description: parseError(symbolResponse.Result),
          });
        }
        if (decimalsResponse.Error) {
          reject({
            type: ErrorMsg.UNKNOWN_ERROR,
            description: parseError(decimalsResponse.Result),
          });
        }
        if (totalSupplyResponse.Error) {
          reject({
            type: ErrorMsg.UNKNOWN_ERROR,
            description: parseError(totalSupplyResponse.Result),
          });
        }

        const decimals = decimalsResponse.Result.Result;
        const totalSupply = reverseHex2FixedNumStr(totalSupplyResponse.Result.Result, decimals).toString();

        resolve({
          name: utils.hexstr2str(nameResponse.Result.Result),
          symbol: utils.hexstr2str(symbolResponse.Result.Result),
          decimals,
          totalSupply,
        });
      })
      .catch(err => {
        reject({
          type: ErrorMsg.UNKNOWN_ERROR,
          description: parseError(err),
        });
      });
    } catch (err) {
      reject({
        type: ErrorMsg.UNKNOWN_ERROR,
        description: parseError(err),
      });
    }
  });
}
