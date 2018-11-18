import { sendMessage } from '../../messaging';
import { Command } from '../../constants';

export function getVersion(): Promise<string> {
  return sendMessage({
    command: Command.getVersion,
  });
}
