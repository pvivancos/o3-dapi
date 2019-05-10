interface WithdrawStakeInput {
    network: string;
    nodePublicKey: string;
    amount: number;
    gasPrice?: number;
    gasLimit?: number;
    broadcastOverride?: boolean;
}
interface WithdrawStakeOutput {
    txid: string;
    nodeUrl: string;
}
export declare function withdrawStake(data: WithdrawStakeInput): Promise<WithdrawStakeOutput>;
export {};
//# sourceMappingURL=withdrawStake.d.ts.map