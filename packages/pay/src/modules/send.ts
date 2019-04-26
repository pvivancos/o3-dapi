import { sendMessage } from '../messaging';
import { Command, Asset } from '../constants';

export interface SendInputArgs {
  asset: Asset;
  toAddress: string;
  amount: string;
  description: string;
}

export interface SendSuccessOutput {
  asset: Asset;
  toAddress: string;
  amount: string;
  txid: string;
}

export default function send(data: SendInputArgs): Promise<SendSuccessOutput> {
  return sendMessage({
    command: Command.send,
    data,
  });
}
