import { sendMessage } from '../../../messaging';
import { Nep5Command } from '../constants';

interface TransferInput {
  network?: string;
  scriptHash: string;
  from: string;
  to: string;
  amount: string;
}

interface TransferOutput {
  txid: string;
  nodeUrl: string;
}

export function transfer(data: TransferInput): Promise<TransferOutput> {
  return sendMessage({
    command: Nep5Command.transfer,
    data,
  });
}
