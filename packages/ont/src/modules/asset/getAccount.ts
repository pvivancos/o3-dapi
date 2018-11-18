import { sendMessage } from '../../messaging';
import { Command } from '../../constants';

export function getAccount(): Promise<string> {
  return sendMessage({
    command: Command.getAccount,
  });
}
