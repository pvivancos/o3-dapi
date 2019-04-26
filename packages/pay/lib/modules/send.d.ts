import { Asset } from '../constants';
export interface SendInputArgs {
    asset: Asset;
    toAddress: string;
    amount: string;
}
export interface SendSuccessOutput {
    asset: Asset;
    toAddress: string;
    amount: string;
    txid: string;
}
export default function send(data: SendInputArgs): Promise<SendSuccessOutput>;
//# sourceMappingURL=send.d.ts.map