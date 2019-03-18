import { Network } from '../../constants';
interface TokenDetailsInput {
    network: Network;
    scriptHash: string;
}
interface TokenDetailsOutput {
    name: string;
    symbol: string;
    decimals: number;
    totalSupply: string;
}
export declare function getTokenDetails({ network, scriptHash, }: TokenDetailsInput): Promise<TokenDetailsOutput>;
export {};
//# sourceMappingURL=getTokenDetails.d.ts.map