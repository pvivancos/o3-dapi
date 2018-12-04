interface GetNodeStakeInfoArgs {
    network?: string;
    address: string;
    nodePublicKey: string;
}
interface NodeStakeInfo {
    publicKey: string;
    activeStake: number;
    pendingStake: number;
    pendingWithdrawStake: number;
    withdrawableStake: number;
}
export declare function getNodeStakeInfo(data: GetNodeStakeInfoArgs): Promise<NodeStakeInfo>;
export {};
//# sourceMappingURL=getNodeStakeInfo.d.ts.map