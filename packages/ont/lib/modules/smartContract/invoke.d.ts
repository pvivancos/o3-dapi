import { Parameter } from './common';
declare type Result = string[];
interface InvokeResponse {
    transaction: string;
    results: Result[];
}
interface InvokeInput {
    scriptHash: string;
    operation: string;
    args?: Parameter[];
    gasPrice?: number;
    gasLimit?: number;
    requireIdentity?: boolean;
    payer?: string;
}
export declare function invoke(data: InvokeInput): Promise<InvokeResponse>;
export {};
//# sourceMappingURL=invoke.d.ts.map