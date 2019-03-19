import {
  RestClient,
} from 'ontology-ts-sdk';
import { ErrorMsg, Network, Transaction } from '../../constants';
import { parseError, getNetworkUrl } from '../../utils';

interface GetTransactionInput {
  txHash: string;
  network: Network;
}

export function getTransaction({
  network,
  txHash,
}: GetTransactionInput): Promise<Transaction> {
  return new Promise((resolve, reject) => {
    try {
      const url = getNetworkUrl(network);

      new RestClient(url).getRawTransactionJson(txHash)
      .then(res => res.Result)
      .then(resolve)
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
