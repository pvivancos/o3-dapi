import { sendMessage } from '../../../messaging';
import { Oep4Command } from '../constants';

interface TransferFromInput {
  network: string;
  scriptHash: string;
  from: string;
  to: string;
  amount: string;
  gasPrice?: number;
  gasLimit?: number;
}

interface TransferFromOutput {
  txid: string;
  nodeUrl: string;
}

export function transferFrom(data: TransferFromInput): Promise<TransferFromOutput> {
  return sendMessage({
    command: Oep4Command.transferFrom,
    data,
  });
}
