import { Transaction } from '../../constants';
interface GetTransactionInput {
    txHash: string;
    network?: string;
}
export declare function getTransaction(data: GetTransactionInput): Promise<Transaction>;
export {};
//# sourceMappingURL=getTransaction.d.ts.map