import { sendMessage } from '../../../messaging';
import { Oep8Command } from '../constants';

interface SymbolInput {
  network?: string;
  scriptHash: string;
  tokenId: string;
}

export function symbol(data: SymbolInput): Promise<string> {
  return sendMessage({
    command: Oep8Command.symbol,
    data,
  });
}
