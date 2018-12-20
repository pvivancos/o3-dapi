interface Output {
    tokenId: string;
    spender: string;
    from: string;
    to: string;
    amount: string;
}
interface TransferFromInput {
    network: string;
    scriptHash: string;
    outputs: Output[];
}
interface TransferFromOutput {
    txid: string;
    nodeUrl: string;
}
export declare function transferFromMulti(data: TransferFromInput): Promise<TransferFromOutput>;
export {};
//# sourceMappingURL=transferFromMulti.d.ts.map