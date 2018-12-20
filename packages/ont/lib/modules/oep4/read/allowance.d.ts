interface AllowanceInput {
    network: string;
    scriptHash: string;
    owner: string;
    spender: string;
}
export declare function allowance(data: AllowanceInput): Promise<string>;
export {};
//# sourceMappingURL=allowance.d.ts.map