import { Network, ArgumentDataType } from '../constants';
export interface InvokeReadArgs {
    scriptHash: string;
    operation: string;
    args: Argument[];
    network: Network;
}
interface Argument {
    type: ArgumentDataType;
    value: any;
}
export default function invokeRead({ scriptHash, operation, args, network, }: InvokeReadArgs): Promise<any>;
export {};
//# sourceMappingURL=invokeRead.d.ts.map