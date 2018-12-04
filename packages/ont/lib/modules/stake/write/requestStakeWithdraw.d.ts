interface RequestStakeWithdrawInput {
    network?: string;
    nodePublicKey: string;
    amount: number;
    gasPrice?: number;
    gasLimit?: number;
}
interface RequestStakeWithdrawOutput {
    txid: string;
    nodeUrl: string;
}
export declare function requestStakeWithdraw(data: RequestStakeWithdrawInput): Promise<RequestStakeWithdrawOutput>;
export {};
//# sourceMappingURL=requestStakeWithdraw.d.ts.map