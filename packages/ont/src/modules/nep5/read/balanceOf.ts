import { sendMessage } from '../../../messaging';
import { Nep5Command } from '../constants';

interface BalanceOfInput {
  network?: string;
  scriptHash: string;
  address: string;
}

export function balanceOf(data: BalanceOfInput): Promise<string> {
  return sendMessage({
    command: Nep5Command.balanceOf,
    data,
  });
}
