import { sendMessage } from '../../messaging';
import { Command } from '../../constants';
import { Transaction } from '../../constants';

interface GetTransactionInput {
  txHash: string;
  network?: string;
}

export function getTransaction(data: GetTransactionInput): Promise<Transaction> {
  return sendMessage({
    command: Command.getTransaction,
    data,
  });
}
