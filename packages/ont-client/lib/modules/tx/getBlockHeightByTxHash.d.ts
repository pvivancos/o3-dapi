import { Network } from '../../constants';
interface GetBlockHeightByTxHashInput {
    hash: string;
    network: Network;
}
export declare function getBlockHeightByTxHash({ network, hash, }: GetBlockHeightByTxHashInput): Promise<number>;
export {};
//# sourceMappingURL=getBlockHeightByTxHash.d.ts.map