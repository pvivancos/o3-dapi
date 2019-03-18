import { Network } from '../../constants';
interface GetNodeListArgs {
    network: Network;
}
interface NodeListOutput {
    nodes: Node[];
}
interface Node {
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
export declare function getNodeList({ network }: GetNodeListArgs): Promise<NodeListOutput>;
export {};
//# sourceMappingURL=getNodeList.d.ts.map