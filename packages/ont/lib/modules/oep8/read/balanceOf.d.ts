interface BalanceOfInput {
    network?: string;
    scriptHash: string;
    tokenId: string;
    address: string;
}
export declare function balanceOf(data: BalanceOfInput): Promise<string>;
export {};
//# sourceMappingURL=balanceOf.d.ts.map