import {
  RestClient,
} from 'ontology-ts-sdk';
import { ErrorMsg, Network } from '../../constants';
import { parseError, getNetworkUrl } from '../../utils';

interface GetBlockTxsByHeightInput {
  height: number;
  network: Network;
}

interface BlockWithTxList {
  Hash: string;
  Height: number;
  Transactions: string[];
}

export function getBlockTxsByHeight({
  network,
  height,
}: GetBlockTxsByHeightInput): Promise<BlockWithTxList> {
  return new Promise((resolve, reject) => {
    try {
      const url = getNetworkUrl(network);

      new RestClient(url).getBlockTxsByHeight(height)
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
