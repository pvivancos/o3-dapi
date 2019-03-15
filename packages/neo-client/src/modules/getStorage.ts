import { rpc } from '@cityofzion/neon-js';
const { Query } = rpc;
import { ErrorMsg, Network } from '../constants';
import { parseError } from '../utils';
import { fillUrl } from '../o3api';

export interface GetStorageArgs {
  scriptHash: string;
  key: string;
  network: Network;
}

export interface GetStorageOutput {
  result: string;
}

export default function getStorage({
  scriptHash,
  key,
  network,
}: GetStorageArgs) {
  return new Promise((resolve, reject) => {
    try {
      const invoke = Query.getStorage(scriptHash, key);

      fillUrl(network)
      .then(url => invoke.execute(url))
      .then(res => {
        resolve({
          result: res && res.result ? res.result : '',
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
