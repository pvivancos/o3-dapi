import { sendMessage } from '../../../messaging';
import { Oep8Command } from '../constants';

interface Output {
  tokenId: string;
  from: string;
  to: string;
  amount: string;
}

interface TransferMultiInput {
  network?: string;
  scriptHash: string;
  outputs: Output[];
}

interface TransferMultiOutput {
  txid: string;
  nodeUrl: string;
}

export function transferMulti(data: TransferMultiInput): Promise<TransferMultiOutput> {
  return sendMessage({
    command: Oep8Command.transferMulti,
    data,
  });
}
