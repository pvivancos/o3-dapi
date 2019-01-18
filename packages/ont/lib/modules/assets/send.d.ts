import { Asset } from '../../constants';
interface SendInput {
    to: string;
    asset: Asset;
    amount: string;
    network: string;
}
export declare function send(data: SendInput): Promise<string>;
export {};
//# sourceMappingURL=send.d.ts.map