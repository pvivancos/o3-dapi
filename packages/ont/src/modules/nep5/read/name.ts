import { sendMessage } from '../../../messaging';
import { Nep5Command } from '../constants';

interface NameInput {
  network?: string;
  scriptHash: string;
}

export function name(data: NameInput): Promise<string> {
  return sendMessage({
    command: Nep5Command.name,
    data,
  });
}
