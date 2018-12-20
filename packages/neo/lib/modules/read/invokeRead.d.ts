import { ArgumentDataType } from '../../constants';
interface InvokeReadArgs {
    scriptHash: string;
    operation: string;
    args: Argument[];
    network: string;
}
interface Argument {
    type: ArgumentDataType;
    value: any;
}
export declare function invokeRead(data: InvokeReadArgs): Promise<any>;
export {};
//# sourceMappingURL=invokeRead.d.ts.map