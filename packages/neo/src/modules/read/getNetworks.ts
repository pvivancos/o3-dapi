import { sendMessage } from '../../messaging';
import { Command } from '../../constants';

export function getNetworks(): Promise<string[]> {
  return sendMessage({
    command: Command.getNetworks,
    timeout: 2500,
  });
}
