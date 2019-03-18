import { Network } from '../../constants';
interface GetNodeStakeInfoArgs {
    network: Network;
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
export declare function getNodeStakeInfo({ network, address, nodePublicKey, }: GetNodeStakeInfoArgs): Promise<NodeStakeInfo>;
export {};
//# sourceMappingURL=getNodeStakeInfo.d.ts.map