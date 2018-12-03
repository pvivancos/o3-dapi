interface TransferFromInput {
    network?: string;
    scriptHash: string;
    spender: string;
    from: string;
    to: string;
    amount: string;
}
interface TransferFromOutput {
    txid: string;
    nodeUrl: string;
}
export declare function transferFrom(data: TransferFromInput): Promise<TransferFromOutput>;
export {};
//# sourceMappingURL=transferFrom.d.ts.map