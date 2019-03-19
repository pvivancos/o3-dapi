import { Network } from '../../constants';
interface GetBalanceInput {
    address: string;
    network: Network;
}
interface Balance {
    ont: string;
    ong: string;
}
export declare function getBalance({ network, address }: GetBalanceInput): Promise<Balance>;
export {};
//# sourceMappingURL=getBalance.d.ts.map