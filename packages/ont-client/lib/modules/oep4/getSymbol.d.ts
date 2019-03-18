import { Network } from '../../constants';
interface SymbolInput {
    network: Network;
    scriptHash: string;
}
interface SymbolOutput {
    symbol: string;
}
export declare function getSymbol({ network, scriptHash, }: SymbolInput): Promise<SymbolOutput>;
export {};
//# sourceMappingURL=getSymbol.d.ts.map