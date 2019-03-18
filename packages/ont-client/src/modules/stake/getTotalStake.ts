import {
  GovernanceTxBuilder,
  Crypto,
} from 'ontology-ts-sdk';
const {
  Address,
} = Crypto;
import { ErrorMsg, Network } from '../../constants';
import { parseError, getNetworkUrl } from '../../utils';

interface GetTotalStakeArgs {
  network: Network;
  address: string;
}

interface TotalStake {
  amount: number;
}

export function getTotalStake({
  network,
  address,
}: GetTotalStakeArgs): Promise<TotalStake> {
  return new Promise((resolve, reject) => {
    try {
      const url = getNetworkUrl(network);

      GovernanceTxBuilder.getTotalStake(new Address(address), url)
      .then(({stake}) => {
        resolve({
          amount: stake || 0,
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
