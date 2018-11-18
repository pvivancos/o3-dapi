import { sendMessage } from '../../messaging';
import { Command } from '../../constants';

export function getPublicKey(): Promise<string> {
  return sendMessage({
    command: Command.getPublicKey,
  });
}
