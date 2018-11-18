import { sendMessage } from '../../messaging';
import { Command } from '../../constants';

export function getBlockHeight(): Promise<number> {
  return sendMessage({
    command: Command.getBlockHeight,
  });
}
