interface GetStakeRoundInfoArgs {
    network?: string;
}
interface StakeRoundInfo {
    currentRound: number;
    currentBlock: number;
    blocksPerRound: number;
    startBlock: number;
    endBlock: number;
    remainingBlocks: number;
}
export declare function getStakeRoundInfo(data: GetStakeRoundInfoArgs): Promise<StakeRoundInfo>;
export {};
//# sourceMappingURL=getStakeRoundInfo.d.ts.map