import { sendMessage } from '../../messaging';
import { Command } from '../../constants';

export function isReady(): Promise<boolean> {
  return sendMessage({
    command: Command.isReady,
  });
}
