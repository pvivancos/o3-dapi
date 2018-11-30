import { sendMessage } from '../../../messaging';
import { Oep4Command } from '../constants';

interface BalanceOfInput {
  network?: string;
  scriptHash: string;
  address: string;
}

export function balanceOf(data: BalanceOfInput): Promise<string> {
  return sendMessage({
    command: Oep4Command.balanceOf,
    data,
  });
}
