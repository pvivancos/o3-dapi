import { Network } from '../../constants';
interface BalanceOfInput {
    network: Network;
    scriptHash: string;
    address: string;
}
interface BalanceOfOutput {
    amount: string;
}
export declare function getBalanceOf({ network, scriptHash, address, }: BalanceOfInput): Promise<BalanceOfOutput>;
export {};
//# sourceMappingURL=getBalanceOf.d.ts.map