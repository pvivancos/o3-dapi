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

interface TotalSupplyInput {
  network: Network;
  scriptHash: string;
}

interface TotalSupply {
  totalSupply: string;
}

export function getTotalSupply({
  network,
  scriptHash,
}: TotalSupplyInput): Promise<TotalSupply> {
  return new Promise((resolve, reject) => {
    try {
      const url = getNetworkUrl(network);

      const parsedContractAddress = new Address(utils.reverseHex(scriptHash));
      const oep4 = new Oep4.Oep4TxBuilder(parsedContractAddress);
      const decimalsTx = oep4.queryDecimals();
      const totalSupplytx = oep4.queryTotalSupply();

      Promise.all([
        new RestClient(url).sendRawTransaction(decimalsTx.serialize(), true),
        new RestClient(url).sendRawTransaction(totalSupplytx.serialize(), true),
      ])
      .then(([decimalsRes, totalSupplyRes]) => {
        if (decimalsRes.Error) {
          throw new Error(decimalsRes.Result);
        }
        if (totalSupplyRes.Error) {
          throw new Error(totalSupplyRes.Result);
        }
        const decimals = Number(decimalsRes.Result.Result);
        const totalSupply = reverseHex2FixedNumStr(totalSupplyRes.Result.Result, decimals).toString();

        resolve({
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
