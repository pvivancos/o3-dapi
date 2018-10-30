import { sendMessage } from '../../messaging';
import { Command } from '../../constants';

export function getNetworks(): Promise<string[]> {
  console.log('getNetworks');
  return sendMessage({
    command: Command.getNetworks,
  });
}
