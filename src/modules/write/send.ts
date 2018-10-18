import { sendMessage } from '../../messaging';
import { SEND } from '../../constants/commands';

interface SendArgs {
  to: string;
  asset: string;
  amount: string;
  remark?: string;
  fee?: string;
}

export function send(data: SendArgs): Promise<string> {
  return sendMessage({
    command: SEND,
    data,
  });
}
