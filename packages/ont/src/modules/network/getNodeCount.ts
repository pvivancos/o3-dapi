import { sendMessage } from '../../messaging';
import { Command } from '../../constants';

export function getNodeCount(): Promise<number> {
  return sendMessage({
    command: Command.getNodeCount,
  });
}
