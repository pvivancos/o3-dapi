import { sendMessage } from '../../../messaging';
import { Oep4Command } from '../constants';

interface NameInput {
  network?: string;
  scriptHash: string;
}

export function getName(data: NameInput): Promise<string> {
  return sendMessage({
    command: Oep4Command.getName,
    data,
  });
}
