import { sendMessage } from '../../messaging';
import { Command } from '../../constants';
import { TransactionType, TxSignature, Transaction } from './common';

interface GetTransactionInput {
  txHash: string;
}

export function getTransaction(data: GetTransactionInput): Promise<Transaction> {
  return sendMessage({
    command: Command.getTransaction,
    data,
  });
}
