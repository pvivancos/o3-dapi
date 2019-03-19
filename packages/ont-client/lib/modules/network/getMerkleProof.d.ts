import { Network } from '../../constants';
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
export declare function getMerkleProof({ network, txHash }: GetMerkleProofInput): Promise<MerkleProof>;
export {};
//# sourceMappingURL=getMerkleProof.d.ts.map