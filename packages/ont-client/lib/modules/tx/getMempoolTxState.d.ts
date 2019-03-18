import { Network } from '../../constants';
interface GetMempoolTxStateInput {
    network: Network;
    hash: string;
}
export declare function getMempoolTxState({ network, hash, }: GetMempoolTxStateInput): Promise<any>;
export {};
//# sourceMappingURL=getMempoolTxState.d.ts.map