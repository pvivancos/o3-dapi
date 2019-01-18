interface GetAccountArgs {
    publicKey?: boolean;
}
interface Account {
    address: string;
    label: string;
    publicKey?: string;
}
export declare function getAccount(data?: GetAccountArgs): Promise<Account>;
export {};
//# sourceMappingURL=getAccount.d.ts.map