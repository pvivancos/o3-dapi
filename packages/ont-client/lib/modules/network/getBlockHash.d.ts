import { Network } from '../../constants';
interface GetBlockHashInput {
    height: number;
    network: Network;
}
export declare function getBlockHash({ network, height }: GetBlockHashInput): Promise<string>;
export {};
//# sourceMappingURL=getBlockHash.d.ts.map