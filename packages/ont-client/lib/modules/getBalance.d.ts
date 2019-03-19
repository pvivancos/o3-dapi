import { Network } from '../constants';
interface BalanceRequest {
    address: string;
    assets?: string[];
    fetchUTXO?: boolean;
}
export interface GetBalanceArgs {
    params: BalanceRequest | BalanceRequest[];
    network: Network;
}
export interface BalanceResults {
    [address: string]: Balance[];
}
interface Balance {
    assetID: string;
    symbol: string;
    amount: string;
}
export default function getBalance({ network, params }: GetBalanceArgs): Promise<BalanceResults>;
export {};
//# sourceMappingURL=getBalance.d.ts.map