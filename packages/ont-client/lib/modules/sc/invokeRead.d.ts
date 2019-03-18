import { Parameter } from 'ontology-ts-sdk';
import { Network } from '../../constants';
interface InvokeReadInput {
    scriptHash: string;
    operation: string;
    args?: Parameter[];
    network: Network;
}
export declare function invokeRead({ scriptHash, operation, args, network, }: InvokeReadInput): Promise<string>;
export {};
//# sourceMappingURL=invokeRead.d.ts.map