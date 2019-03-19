import { Asset, Network } from '../../constants';
interface Allowance {
    asset: Asset;
    from: string;
    to: string;
    network: Network;
}
export declare function getAllowance({ network, asset, from, to }: Allowance): Promise<Allowance>;
export {};
//# sourceMappingURL=getAllowance.d.ts.map