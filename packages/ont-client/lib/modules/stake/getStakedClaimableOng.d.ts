import { Network } from '../../constants';
interface GetStakedClaimableOngArgs {
    network: Network;
    address: string;
}
interface StakedClaimableOng {
    amount: string;
}
export declare function getStakedClaimableOng({ network, address, }: GetStakedClaimableOngArgs): Promise<StakedClaimableOng>;
export {};
//# sourceMappingURL=getStakedClaimableOng.d.ts.map