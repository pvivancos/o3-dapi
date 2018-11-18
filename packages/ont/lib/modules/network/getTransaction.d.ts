import { Transaction } from './common';
interface GetTransactionInput {
    txHash: string;
}
export declare function getTransaction(data: GetTransactionInput): Promise<Transaction>;
export {};
//# sourceMappingURL=getTransaction.d.ts.map