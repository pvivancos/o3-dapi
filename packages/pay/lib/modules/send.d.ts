import { Asset } from '../constants';
export interface SendInputArgs {
    asset: Asset;
    to: string;
    amount: string;
    description?: string;
    uniqueId?: string;
}
export interface SendSuccessOutput {
    result: boolean;
    txid?: string;
}
export default function send(data: SendInputArgs): Promise<SendSuccessOutput>;
//# sourceMappingURL=send.d.ts.map