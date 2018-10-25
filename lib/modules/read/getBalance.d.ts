import { Network } from '../../constants';
interface BalanceRequest {
    address: string;
    asset?: string;
}
interface BalanceResults {
    [address: string]: Balances;
}
interface Balances {
    [asset: string]: string;
}
export declare function getBalance(data: BalanceRequest | BalanceRequest[], network?: Network): Promise<BalanceResults>;
export {};
//# sourceMappingURL=getBalance.d.ts.map