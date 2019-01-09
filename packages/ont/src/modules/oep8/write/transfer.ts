import { sendMessage } from '../../../messaging';
import { Oep8Command } from '../constants';

interface TransferInput {
  network: string;
  scriptHash: string;
  tokenId: string;
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
    command: Oep8Command.transfer,
    data,
  });
}
