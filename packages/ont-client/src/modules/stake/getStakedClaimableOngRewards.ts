import {
  GovernanceTxBuilder,
  Crypto,
} from 'ontology-ts-sdk';

const {
  Address,
} = Crypto;
import { ErrorMsg, Network } from '../../constants';
import { parseError, getNetworkUrl, int2FixedDecimalStr } from '../../utils';

interface GetStakedClaimableOngRewardsArgs {
  network: Network;
  address: string;
}

interface StakedClaimableOngRewards {
  amount: string;
}

export function getStakedClaimableOngRewards({
  network,
  address,
}: GetStakedClaimableOngRewardsArgs): Promise<StakedClaimableOngRewards> {
  return new Promise((resolve, reject) => {
    try {
      const url = getNetworkUrl(network);

      GovernanceTxBuilder.getSplitFeeAddress(new Address(address), url)
      .then(({amount}) => {
        resolve({
          amount: int2FixedDecimalStr(amount, 9),
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
