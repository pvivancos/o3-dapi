interface GetClaimableOngArgs {
    network?: string;
    address: string;
}
interface ClaimableOng {
    amount: string;
}
export declare function getClaimableOng(data: GetClaimableOngArgs): Promise<ClaimableOng>;
export {};
//# sourceMappingURL=getClaimableOng.d.ts.map