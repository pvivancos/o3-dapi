import {
  RestClient,
} from 'ontology-ts-sdk';
import { ErrorMsg, Network } from '../../constants';
import { parseError, getNetworkUrl } from '../../utils';

interface GetMempoolTxStateInput {
  network: Network;
  hash: string;
}

export function getMempoolTxState({
  network,
  hash,
}: GetMempoolTxStateInput): Promise<any> {
  return new Promise((resolve, reject) => {
    try {
      const url = getNetworkUrl(network);

      new RestClient(url).getMempoolTxState(hash)
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
