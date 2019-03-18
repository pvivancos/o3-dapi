import { Network } from '../../constants';
interface GetStakeRoundInfoArgs {
    network: Network;
}
interface StakeRoundInfo {
    currentRound: number;
    currentBlock: number;
    blocksPerRound: number;
    startBlock: number;
    endBlock: number;
    remainingBlocks: number;
}
export declare function getStakeRoundInfo({ network, }: GetStakeRoundInfoArgs): Promise<StakeRoundInfo>;
export {};
//# sourceMappingURL=getStakeRoundInfo.d.ts.map