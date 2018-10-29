import { sendMessage } from '../../messaging';
import { Command } from '../../constants';

interface SendArgs {
  to: string;
  asset: string;
  amount: string;
  remark?: string;
  fee?: string;
}

export function send(data: SendArgs, network?: string): Promise<string> {
  return sendMessage({
    command: Command.send,
    data,
    network,
  });
}
