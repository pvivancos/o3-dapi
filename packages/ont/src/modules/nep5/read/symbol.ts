import { sendMessage } from '../../../messaging';
import { Nep5Command } from '../constants';

interface SymbolInput {
  network?: string;
  scriptHash: string;
}

export function symbol(data: SymbolInput): Promise<string> {
  return sendMessage({
    command: Nep5Command.symbol,
    data,
  });
}
