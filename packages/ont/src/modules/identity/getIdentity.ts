import { sendMessage } from '../../messaging';
import { Command } from '../../constants';

export function getIdentity(): Promise<string> {
  return sendMessage({
    command: Command.getIdentity,
  });
}
