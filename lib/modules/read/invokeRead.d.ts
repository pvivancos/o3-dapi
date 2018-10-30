import { ArgumentDataType } from '../../constants';
interface InvokeReadArgs {
    scriptHash: string;
    operation: string;
    args: Argument[];
}
interface Argument {
    type: ArgumentDataType;
    value: any;
}
export declare function invokeRead(data: InvokeReadArgs, network?: string): Promise<any>;
export {};
//# sourceMappingURL=invokeRead.d.ts.map