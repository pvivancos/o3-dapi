interface ClaimStakedOngInput {
    network: string;
    gasPrice?: number;
    gasLimit?: number;
    broadcastOverride?: boolean;
}
interface ClaimStakedOngOutput {
    txid: string;
    nodeUrl: string;
}
export declare function claimStakedOng(data: ClaimStakedOngInput): Promise<ClaimStakedOngOutput>;
export {};
//# sourceMappingURL=claimStakedOng.d.ts.map