interface AllowanceInput {
    network: string;
    scriptHash: string;
    owner: string;
    spender: string;
}
export declare function getAllowance(data: AllowanceInput): Promise<string>;
export {};
//# sourceMappingURL=getAllowance.d.ts.map