import { sendMessage } from '../../../messaging';
import { Oep4Command } from '../constants';

interface SymbolInput {
  network: string;
  scriptHash: string;
}

export function getSymbol(data: SymbolInput): Promise<string> {
  return sendMessage({
    command: Oep4Command.getSymbol,
    data,
  });
}
