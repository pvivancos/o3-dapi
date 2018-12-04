interface GetBalanceInput {
    address: string;
    network?: string;
}
interface Balance {
    ONT: string;
    ONG: string;
    [key: string]: string;
}
export declare function getBalance(data: GetBalanceInput): Promise<Balance>;
export {};
//# sourceMappingURL=getBalance.d.ts.map