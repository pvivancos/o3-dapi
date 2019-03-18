import { Network } from '../../constants';
interface AllowanceInput {
    network: Network;
    scriptHash: string;
    owner: string;
    spender: string;
}
interface AllowanceOutput {
    amount: string;
}
export declare function getAllowance({ network, scriptHash, owner, spender, }: AllowanceInput): Promise<AllowanceOutput>;
export {};
//# sourceMappingURL=getAllowance.d.ts.map