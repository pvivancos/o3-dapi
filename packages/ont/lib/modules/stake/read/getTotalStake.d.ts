interface GetTotalStakeArgs {
    network: string;
    address: string;
}
interface TotalStake {
    amount: number;
}
export declare function getTotalStake(data: GetTotalStakeArgs): Promise<TotalStake>;
export {};
//# sourceMappingURL=getTotalStake.d.ts.map