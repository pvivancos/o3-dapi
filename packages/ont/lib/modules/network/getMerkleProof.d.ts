interface GetMerkleProofInput {
    txHash: string;
    network: string;
}
interface MerkleProof {
    Type: string;
    TransactionsRoot: string;
    BlockHeight: number;
    CurBlockRoot: string;
    CurBlockHeight: number;
    TargetHashes: string[];
}
export declare function getMerkleProof(data: GetMerkleProofInput): Promise<MerkleProof>;
export {};
//# sourceMappingURL=getMerkleProof.d.ts.map