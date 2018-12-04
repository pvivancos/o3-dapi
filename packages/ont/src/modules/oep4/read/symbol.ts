import { sendMessage } from '../../../messaging';
import { Oep4Command } from '../constants';

interface SymbolInput {
  network?: string;
  scriptHash: string;
}

export function symbol(data: SymbolInput): Promise<string> {
  return sendMessage({
    command: Oep4Command.symbol,
    data,
  });
}
