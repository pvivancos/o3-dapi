interface SendArgs {
    fromAddress: string;
    toAddress: string;
    asset: string;
    amount: string;
    remark?: string;
    fee?: string;
    network?: string;
}
interface SendOutput {
    txid: string;
    nodeUrl: string;
}
export declare function send(data: SendArgs): Promise<SendOutput>;
export {};
//# sourceMappingURL=send.d.ts.map