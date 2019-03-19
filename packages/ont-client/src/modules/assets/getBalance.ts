import {
  Crypto,
  RestClient,
} from 'ontology-ts-sdk';
const {
  Address,
} = Crypto;
import { ErrorMsg, Asset, Network } from '../../constants';
import { parseError, getNetworkUrl } from '../../utils';

interface GetBalanceInput {
  address: string;
  network: Network;
}

interface Balance {
  ont: string;
  ong: string;
}

export function getBalance({ network, address }: GetBalanceInput): Promise<Balance> {
  return new Promise((resolve, reject) => {
    try {
      const url = getNetworkUrl(network);

      new RestClient(url).getBalance(new Address(address))
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
