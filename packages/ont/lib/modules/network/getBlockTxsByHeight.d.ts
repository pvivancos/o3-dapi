interface GetBlockTxsByHeightInput {
    height: number;
}
interface BlockWithTxList {
    Hash: string;
    Height: number;
    Transactions: string[];
}
export declare function getBlockTxsByHeight(data: GetBlockTxsByHeightInput): Promise<BlockWithTxList>;
export {};
//# sourceMappingURL=getBlockTxsByHeight.d.ts.map