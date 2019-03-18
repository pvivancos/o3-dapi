import { Network } from '../../constants';
interface TotalSupplyInput {
    network: Network;
    scriptHash: string;
}
interface TotalSupply {
    totalSupply: string;
}
export declare function getTotalSupply({ network, scriptHash, }: TotalSupplyInput): Promise<TotalSupply>;
export {};
//# sourceMappingURL=getTotalSupply.d.ts.map