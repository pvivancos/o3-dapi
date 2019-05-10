interface ApproveInput {
    network: string;
    scriptHash: string;
    owner: string;
    spender: string;
    amount: string;
    gasPrice?: number;
    gasLimit?: number;
    broadcastOverride?: boolean;
}
interface ApproveOutput {
    txid: string;
    nodeUrl: string;
}
export declare function approve(data: ApproveInput): Promise<ApproveOutput>;
export {};
//# sourceMappingURL=approve.d.ts.map