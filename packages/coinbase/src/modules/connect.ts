import { sendMessage } from '../messaging';
import { Command } from '../constants';

export default function connect(data: {token: string}): Promise<boolean> {
  return sendMessage({
    command: Command.connect,
    data,
  });
}
