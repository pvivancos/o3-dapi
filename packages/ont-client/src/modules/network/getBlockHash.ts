import {
  RestClient,
} from 'ontology-ts-sdk';
import { ErrorMsg, Network } from '../../constants';
import { parseError, getNetworkUrl } from '../../utils';

interface GetBlockHashInput {
  height: number;
  network: Network;
}

export function getBlockHash({ network, height }: GetBlockHashInput): Promise<string> {
  return new Promise((resolve, reject) => {
    // try {
    //   const url = getNetworkUrl(network);
    //
    //   new RestClient(url).getBlockJson(Number.isNaN(Number(block)) ? block : Number(block))
    //   .then(res => res.Result)
    //   .then(resolve)
    //   .catch(err => {
    //     reject({
    //       type: ErrorMsg.UNKNOWN_ERROR,
    //       description: parseError(err),
    //     });
    //   });
    // } catch (err) {
    //   reject({
    //     type: ErrorMsg.UNKNOWN_ERROR,
    //     description: parseError(err),
    //   });
    // }

      reject({
        type: ErrorMsg.UNKNOWN_ERROR,
        description: 'not yet supported',
      });
  });
}
