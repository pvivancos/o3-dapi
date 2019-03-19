import {
  Crypto,
  RestClient,
  utils,
  Oep4,
} from 'ontology-ts-sdk';
const {
  Address,
} = Crypto;
import { ErrorMsg, Network } from '../../constants';
import { parseError, getNetworkUrl, reverseHex2FixedNumStr } from '../../utils';

interface GetContractInput {
  hash: string;
  network: Network;
}

interface Contract {
  Code: string;
  NeedStorage: boolean;
  Name: string;
  CodeVersion: string;
  Author: string;
  Email: string;
  Description: string;
}

export function getContract({
  network,
  hash,
}: GetContractInput): Promise<Contract> {
  return new Promise((resolve, reject) => {
    try {
      const url = getNetworkUrl(network);

      new RestClient(url).getContractJson(hash)
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
