import { sendMessage } from '../../../messaging';
import { Oep4Command } from '../constants';

interface BalanceOfInput {
  network?: string;
  scriptHash: string;
  address: string;
}

export function getBalanceOf(data: BalanceOfInput): Promise<string> {
  return sendMessage({
    command: Oep4Command.getBalanceOf,
    data,
  });
}
