interface CompoundInput {
    network: string;
    scriptHash: string;
    account: string;
    compoundNum: number;
}
interface CompoundOutput {
    txid: string;
    nodeUrl: string;
}
export declare function compound(data: CompoundInput): Promise<CompoundOutput>;
export {};
//# sourceMappingURL=compound.d.ts.map