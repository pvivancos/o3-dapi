import {
  Crypto,
  RestClient,
} from 'ontology-ts-sdk';
const {
  Address,
} = Crypto;
import { ErrorMsg, Asset, Network } from '../../constants';
import { parseError, getNetworkUrl } from '../../utils';

interface Allowance {
  asset: Asset;
  from: string;
  to: string;
  network: Network;
}

export function getAllowance({ network, asset, from, to }: Allowance): Promise<Allowance> {
  return new Promise((resolve, reject) => {
    try {
      const url = getNetworkUrl(network);

      new RestClient(url).getAllowance(asset, new Address(from), new Address(to))
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
