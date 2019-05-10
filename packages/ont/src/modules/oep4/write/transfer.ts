import { sendMessage } from '../../../messaging';
import { Oep4Command } from '../constants';

interface TransferInput {
  network: string;
  scriptHash: string;
  from: string;
  to: string;
  amount: string;
  gasPrice?: number;
  gasLimit?: number;
  broadcastOverride?: boolean;
}

interface TransferOutput {
  txid: string;
  nodeUrl: string;
}

export function transfer(data: TransferInput): Promise<TransferOutput> {
  return sendMessage({
    command: Oep4Command.transfer,
    data,
  });
}
