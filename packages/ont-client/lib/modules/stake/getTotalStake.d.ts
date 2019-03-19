import { Network } from '../../constants';
interface GetTotalStakeArgs {
    network: Network;
    address: string;
}
interface TotalStake {
    amount: number;
}
export declare function getTotalStake({ network, address, }: GetTotalStakeArgs): Promise<TotalStake>;
export {};
//# sourceMappingURL=getTotalStake.d.ts.map