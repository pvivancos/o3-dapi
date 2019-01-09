interface Output {
    from: string;
    to: string;
    amount: string;
}
interface TransferMultiInput {
    network: string;
    scriptHash: string;
    outputs: Output[];
    gasPrice?: number;
    gasLimit?: number;
}
interface TransferMultiOutput {
    txid: string;
    nodeUrl: string;
}
export declare function transferMulti(data: TransferMultiInput): Promise<TransferMultiOutput>;
export {};
//# sourceMappingURL=transferMulti.d.ts.map