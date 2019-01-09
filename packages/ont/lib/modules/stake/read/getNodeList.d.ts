interface GetNodeListArgs {
    network?: string;
}
interface NodeList {
    address: string;
    publicKey: string;
    isConsensusNode: boolean;
    name: string;
    url: string;
    logo: string;
    description: string;
    region: string;
    ownerStake: number;
    usersStake: number;
    totalStake: number;
    stakePercentFilled: string;
    userRewardsAllocation: string;
    maxUserStake: number;
    maxStake: number;
}
export declare function getNodeList(data: GetNodeListArgs): Promise<NodeList>;
export {};
//# sourceMappingURL=getNodeList.d.ts.map