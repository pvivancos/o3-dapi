interface GetNodeListArgs {
    network: string;
}
interface NodeList {
    address: string;
    publicKey: string;
    isConsensusNode: boolean;
    name: string;
    url: string;
    totalStake: number;
    stakePercentFilled: string;
    userRewardsAllocation: string;
}
export declare function getNodeList(data: GetNodeListArgs): Promise<NodeList>;
export {};
//# sourceMappingURL=getNodeList.d.ts.map