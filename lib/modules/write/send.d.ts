import { Network } from '../../constants';
interface SendArgs {
    to: string;
    asset: string;
    amount: string;
    remark?: string;
    fee?: string;
}
export declare function send(data: SendArgs, network?: Network): Promise<string>;
export {};
//# sourceMappingURL=send.d.ts.map