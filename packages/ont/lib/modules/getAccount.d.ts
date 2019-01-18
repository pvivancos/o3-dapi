interface GetAccountArgs {
    publicKey?: boolean;
}
interface AccountOutput {
    address: string;
    label: string;
    publicKey?: string;
}
export declare function getAccount(data?: GetAccountArgs): Promise<AccountOutput>;
export {};
//# sourceMappingURL=getAccount.d.ts.map