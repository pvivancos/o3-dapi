import { sendMessage } from '../messaging';
import { Command, Asset } from '../constants';

export interface SendInputArgs {
  asset: Asset;
  to: string;
  amount: string;
  description?: string;
  uniqueId?: string;
}

export interface SendSuccessOutput {
  result: boolean;
  txid?: string; // depending on the account used to send, a txid may not always be available at time of user approval.
}

export default function send(data: SendInputArgs): Promise<SendSuccessOutput> {
  return sendMessage({
    command: Command.send,
    data,
  });
}
