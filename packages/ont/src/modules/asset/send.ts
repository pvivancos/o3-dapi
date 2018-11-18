import { sendMessage } from '../../messaging';
import { Command, Asset } from '../../constants';

interface SendInput {
  to: string;
  asset: Asset;
  amount: number;
}

export function send(data: SendInput): Promise<string> {
  return sendMessage({
    command: Command.getPublicKey,
    data,
  });
}
