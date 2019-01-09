import { sendMessage } from '../../../messaging';
import { Oep4Command } from '../constants';

interface Output {
  from: string;
  to: string;
  amount: string;
}

interface TransferMultiInput {
  network: string;
  scriptHash: string;
  outputs: Output[];
  gasPrice?: number;
  gasLimit?: number;
}

interface TransferMultiOutput {
  txid: string;
  nodeUrl: string;
}

export function transferMulti(data: TransferMultiInput): Promise<TransferMultiOutput> {
  return sendMessage({
    command: Oep4Command.transferMulti,
    data,
  });
}
