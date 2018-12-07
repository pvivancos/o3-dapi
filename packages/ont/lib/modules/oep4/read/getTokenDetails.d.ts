interface TokenDetailsInput {
    network?: string;
    scriptHash: string;
}
interface TokenDetailsOutput {
    name: string;
    symbol: string;
    decimals: string;
    totalSupply: string;
}
export declare function getTokenDetails(data: TokenDetailsInput): Promise<TokenDetailsOutput>;
export {};
//# sourceMappingURL=getTokenDetails.d.ts.map