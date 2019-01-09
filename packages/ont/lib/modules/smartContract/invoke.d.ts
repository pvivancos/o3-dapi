import { Parameter } from './common';
interface InvokeInput {
    scriptHash: string;
    operation: string;
    args?: Parameter[];
    gasPrice?: number;
    gasLimit?: number;
    requireIdentity?: boolean;
    payer?: string;
    network: string;
}
interface InvokeOutput {
    txid: string;
    nodeUrl: string;
}
export declare function invoke(data: InvokeInput): Promise<InvokeOutput>;
export {};
//# sourceMappingURL=invoke.d.ts.map