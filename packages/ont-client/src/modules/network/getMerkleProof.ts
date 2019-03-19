import {
  RestClient,
} from 'ontology-ts-sdk';
import { ErrorMsg, Network } from '../../constants';
import { parseError, getNetworkUrl } from '../../utils';

interface GetMerkleProofInput {
  txHash: string;
  network: Network;
}

interface MerkleProof {
  Type: string;
  TransactionsRoot: string;
  BlockHeight: number;
  CurBlockRoot: string;
  CurBlockHeight: number;
  TargetHashes: string[];
}

export function getMerkleProof({ network, txHash }: GetMerkleProofInput): Promise<MerkleProof> {
  return new Promise((resolve, reject) => {
    try {
      const url = getNetworkUrl(network);

      new RestClient(url).getMerkleProof(txHash)
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
