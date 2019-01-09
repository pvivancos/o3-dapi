import { sendMessage } from '../../messaging';
import { Command, Asset } from '../../constants';

interface SendInput {
  to: string;
  asset: Asset;
  amount: string;
  network: string;
}

export function send(data: SendInput): Promise<string> {
  return sendMessage({
    command: Command.send,
    data,
  });
}
