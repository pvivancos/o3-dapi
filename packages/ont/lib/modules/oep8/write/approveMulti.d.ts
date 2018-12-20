interface Output {
    tokenId: string;
    owner: string;
    spender: string;
    amount: string;
}
interface ApproveMultiInput {
    network: string;
    scriptHash: string;
    outputs: Output[];
}
interface ApproveMultiOutput {
    txid: string;
    nodeUrl: string;
}
export declare function approveMulti(data: ApproveMultiInput): Promise<ApproveMultiOutput>;
export {};
//# sourceMappingURL=approveMulti.d.ts.map