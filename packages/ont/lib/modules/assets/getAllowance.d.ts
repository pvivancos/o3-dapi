import { Asset } from '../../constants';
interface Allowance {
    asset: Asset;
    from: string;
    to: string;
    network: string;
}
export declare function getAllowance(data: Allowance): Promise<Allowance>;
export {};
//# sourceMappingURL=getAllowance.d.ts.map