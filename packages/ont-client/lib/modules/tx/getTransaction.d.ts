import { Network, Transaction } from '../../constants';
interface GetTransactionInput {
    txHash: string;
    network: Network;
}
export declare function getTransaction({ network, txHash, }: GetTransactionInput): Promise<Transaction>;
export {};
//# sourceMappingURL=getTransaction.d.ts.map