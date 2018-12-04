interface GetStakedClaimableOngArgs {
    network?: string;
    address: string;
}
interface StakedClaimableOng {
    amount: string;
}
export declare function getStakedClaimableOng(data: GetStakedClaimableOngArgs): Promise<StakedClaimableOng>;
export {};
//# sourceMappingURL=getStakedClaimableOng.d.ts.map