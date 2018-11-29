import { sendMessage } from '../../messaging';
import { Command } from '../../constants';

interface GetMerkleProofInput {
  txHash: string;
  network?: string;
}

interface MerkleProof {
  Type: string;
  TransactionsRoot: string;
  BlockHeight: number;
  CurBlockRoot: string;
  CurBlockHeight: number;
  TargetHashes: string[];
}

export function getMerkleProof(data: GetMerkleProofInput): Promise<MerkleProof> {
  return sendMessage({
    command: Command.getMerkleProof,
    data,
  });
}
