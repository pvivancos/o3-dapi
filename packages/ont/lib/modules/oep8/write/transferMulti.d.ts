interface Output {
    tokenId: string;
    from: string;
    to: string;
    amount: string;
}
interface TransferMultiInput {
    network: string;
    scriptHash: string;
    outputs: Output[];
}
interface TransferMultiOutput {
    txid: string;
    nodeUrl: string;
}
export declare function transferMulti(data: TransferMultiInput): Promise<TransferMultiOutput>;
export {};
//# sourceMappingURL=transferMulti.d.ts.map