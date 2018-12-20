import { sendMessage } from '../../../messaging';
import { Oep8Command } from '../constants';

interface BalanceOfInput {
  network: string;
  scriptHash: string;
  address: string;
}

export function totalBalanceOf(data: BalanceOfInput): Promise<string> {
  return sendMessage({
    command: Oep8Command.totalBalanceOf,
    data,
  });
}
