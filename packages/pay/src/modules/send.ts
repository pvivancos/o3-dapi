import { sendMessage } from '../messaging';
import { Command, Asset } from '../constants';

export interface SendInputArgs {
  asset: Asset;
  to: string;
  amount: string;
  tag?: string; // if the blockchain requires a tag in addition to address this will be populated
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
