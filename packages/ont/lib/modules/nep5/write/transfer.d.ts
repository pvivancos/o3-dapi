interface TransferInput {
    network: string;
    scriptHash: string;
    to: string;
    amount: string;
}
interface TransferOutput {
    txid: string;
    nodeUrl: string;
}
export declare function transfer(data: TransferInput): Promise<TransferOutput>;
export {};
//# sourceMappingURL=transfer.d.ts.map