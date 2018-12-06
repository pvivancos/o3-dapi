interface TransferInput {
    network?: string;
    scriptHash: string;
    from: string;
    to: string;
    amount: string;
    gasPrice?: number;
    gasLimit?: number;
}
interface TransferOutput {
    txid: string;
    nodeUrl: string;
}
export declare function transfer(data: TransferInput): Promise<TransferOutput>;
export {};
//# sourceMappingURL=transfer.d.ts.map