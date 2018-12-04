import { sendMessage } from '../../../messaging';
import { Oep8Command } from '../constants';

interface BalanceOfInput {
  network?: string;
  scriptHash: string;
  tokenId: string;
  address: string;
}

export function balanceOf(data: BalanceOfInput): Promise<string> {
  return sendMessage({
    command: Oep8Command.balanceOf,
    data,
  });
}
