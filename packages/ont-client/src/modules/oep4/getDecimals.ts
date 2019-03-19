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
import { parseError, getNetworkUrl } from '../../utils';

interface DecimalsInput {
  network: Network;
  scriptHash: string;
}

interface BalanceOfOutput {
  decimals: number;
}

export function getDecimals({
  network,
  scriptHash,
}: DecimalsInput): Promise<BalanceOfOutput> {
  return new Promise((resolve, reject) => {
    try {
      const url = getNetworkUrl(network);

      const parsedContractAddress = new Address(utils.reverseHex(scriptHash));
      const oep4 = new Oep4.Oep4TxBuilder(parsedContractAddress);
      const tx = oep4.queryDecimals();

      new RestClient(url).sendRawTransaction(tx.serialize(), true)
      .then(res => {
        if (res.Error) {
          reject({
            type: ErrorMsg.UNKNOWN_ERROR,
            description: res.Result,
          });
          return;
        }
        resolve({
          decimals: Number(res.Result.Result),
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
