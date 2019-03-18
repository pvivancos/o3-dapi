import { Network } from '../../constants';
interface DecimalsInput {
    network: Network;
    scriptHash: string;
}
interface BalanceOfOutput {
    decimals: number;
}
export declare function getDecimals({ network, scriptHash, }: DecimalsInput): Promise<BalanceOfOutput>;
export {};
//# sourceMappingURL=getDecimals.d.ts.map