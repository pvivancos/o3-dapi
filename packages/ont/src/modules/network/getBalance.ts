import { sendMessage } from '../../messaging';
import { Command } from '../../constants';

interface GetBalanceInput {
  address: string;
  network?: string;
}

interface Balance {
  ONT: string;
  ONG: string;
  [key: string]: string;
}

export function getBalance(data: GetBalanceInput): Promise<Balance> {
  return sendMessage({
    command: Command.getBalance,
    data,
  });
}
