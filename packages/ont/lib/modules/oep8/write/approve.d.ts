interface ApproveInput {
    network: string;
    scriptHash: string;
    tokenId: string;
    owner: string;
    spender: string;
    amount: string;
}
interface ApproveOutput {
    txid: string;
    nodeUrl: string;
}
export declare function approve(data: ApproveInput): Promise<ApproveOutput>;
export {};
//# sourceMappingURL=approve.d.ts.map