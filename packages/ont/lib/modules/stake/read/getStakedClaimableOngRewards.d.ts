interface GetStakedClaimableOngRewardsArgs {
    network: string;
    address: string;
}
interface StakedClaimableOngRewards {
    amount: string;
}
export declare function getStakedClaimableOngRewards(data: GetStakedClaimableOngRewardsArgs): Promise<StakedClaimableOngRewards>;
export {};
//# sourceMappingURL=getStakedClaimableOngRewards.d.ts.map