import { ArgumentDataType } from '../../constants/common';
interface InvokeArgs {
    scriptHash: string;
    operation: string;
    args: Argument[];
    assets?: AttachedAssets;
    fee?: string;
}
interface Argument {
    type: ArgumentDataType;
    value: any;
}
interface AttachedAssets {
    [asset: string]: string;
}
export declare function invoke(data: InvokeArgs): Promise<string>;
export {};
//# sourceMappingURL=invoke.d.ts.map