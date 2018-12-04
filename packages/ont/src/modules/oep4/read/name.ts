import { sendMessage } from '../../../messaging';
import { Oep4Command } from '../constants';

interface NameInput {
  network?: string;
  scriptHash: string;
}

export function name(data: NameInput): Promise<string> {
  return sendMessage({
    command: Oep4Command.name,
    data,
  });
}
