import {
  GovernanceTxBuilder,
  Crypto,
} from 'ontology-ts-sdk';

const {
  Address,
} = Crypto;
import { ErrorMsg, Network } from '../../constants';
import { parseError, getNetworkUrl, int2FixedDecimalStr } from '../../utils';

interface GetStakedClaimableOngArgs {
  network: Network;
  address: string;
}

interface StakedClaimableOng {
  amount: string;
}

export function getStakedClaimableOng({
  network,
  address,
}: GetStakedClaimableOngArgs): Promise<StakedClaimableOng> {
  return new Promise((resolve, reject) => {
    try {
      const url = getNetworkUrl(network);

      GovernanceTxBuilder.getPeerUnboundOng(new Address(address), url)
      .then(amount => {
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
