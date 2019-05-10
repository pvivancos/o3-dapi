interface AddStakeInput {
    network: string;
    nodePublicKey: string;
    amount: number;
    gasPrice?: number;
    gasLimit?: number;
    broadcastOverride?: boolean;
}
interface AddStakeOutput {
    txid: string;
    nodeUrl: string;
}
export declare function addStake(data: AddStakeInput): Promise<AddStakeOutput>;
export {};
//# sourceMappingURL=addStake.d.ts.map