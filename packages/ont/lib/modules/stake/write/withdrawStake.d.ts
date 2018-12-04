interface WithdrawStakeInput {
    network?: string;
    nodePublicKey: string;
    amount: number;
    gasPrice?: number;
    gasLimit?: number;
}
interface WithdrawStakeOutput {
    txid: string;
    nodeUrl: string;
}
export declare function withdrawStake(data: WithdrawStakeInput): Promise<WithdrawStakeOutput>;
export {};
//# sourceMappingURL=withdrawStake.d.ts.map