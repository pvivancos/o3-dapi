import { Network } from '../../constants';
interface GetBlockTxsByHeightInput {
    height: number;
    network: Network;
}
interface BlockWithTxList {
    Hash: string;
    Height: number;
    Transactions: string[];
}
export declare function getBlockTxsByHeight({ network, height, }: GetBlockTxsByHeightInput): Promise<BlockWithTxList>;
export {};
//# sourceMappingURL=getBlockTxsByHeight.d.ts.map