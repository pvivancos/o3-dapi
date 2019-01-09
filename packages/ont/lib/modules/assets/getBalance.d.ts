interface GetBalanceInput {
    address: string;
    network: string;
}
interface Balance {
    ont: string;
    ong: string;
}
export declare function getBalance(data: GetBalanceInput): Promise<Balance>;
export {};
//# sourceMappingURL=getBalance.d.ts.map