import { sendMessage } from '../../../messaging';
import { Oep8Command } from '../constants';

interface NameInput {
  network: string;
  scriptHash: string;
  tokenId: string;
}

export function name(data: NameInput): Promise<string> {
  return sendMessage({
    command: Oep8Command.name,
    data,
  });
}
