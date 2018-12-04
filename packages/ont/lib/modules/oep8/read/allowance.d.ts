interface AllowanceInput {
    network?: string;
    scriptHash: string;
    tokenId: string;
    owner: string;
    spender: string;
}
export declare function allowance(data: AllowanceInput): Promise<string>;
export {};
//# sourceMappingURL=allowance.d.ts.map