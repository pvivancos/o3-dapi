import { sendMessage } from '../messaging';
import { Command } from '../constants';

export function disconnect(): Promise<void> {
  return sendMessage({
    command: Command.disconnect,
  });
}
