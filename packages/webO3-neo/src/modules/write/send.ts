import { sendMessage } from '../../messaging';
import { Command } from '../../constants';

interface SendArgs {
  to: string;
  asset: string;
  amount: string;
  remark?: string;
  fee?: string;
  network?: string;
}

interface SendOutput {
  txid: string;
  nodeUrl: string;
}

export function send(data: SendArgs): Promise<SendOutput> {
  return sendMessage({
    command: Command.send,
    data,
  });
}
