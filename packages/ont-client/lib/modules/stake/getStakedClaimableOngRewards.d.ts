import { Network } from '../../constants';
interface GetStakedClaimableOngRewardsArgs {
    network: Network;
    address: string;
}
interface StakedClaimableOngRewards {
    amount: string;
}
export declare function getStakedClaimableOngRewards({ network, address, }: GetStakedClaimableOngRewardsArgs): Promise<StakedClaimableOngRewards>;
export {};
//# sourceMappingURL=getStakedClaimableOngRewards.d.ts.map