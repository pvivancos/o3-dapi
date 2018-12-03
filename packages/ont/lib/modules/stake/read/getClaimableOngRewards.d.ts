interface GetClaimableOngRewardsArgs {
    network?: string;
    address: string;
}
interface ClaimableOngRewards {
    amount: string;
}
export declare function getClaimableOngRewards(data: GetClaimableOngRewardsArgs): Promise<ClaimableOngRewards>;
export {};
//# sourceMappingURL=getClaimableOngRewards.d.ts.map