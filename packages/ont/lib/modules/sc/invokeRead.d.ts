import { Parameter } from './common';
interface InvokeReadInput {
    scriptHash: string;
    operation: string;
    args?: Parameter[];
    network?: string;
}
export declare function invokeRead(data: InvokeReadInput): Promise<any>;
export {};
//# sourceMappingURL=invokeRead.d.ts.map