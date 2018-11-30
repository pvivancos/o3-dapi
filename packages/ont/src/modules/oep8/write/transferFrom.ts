import { sendMessage } from '../../../messaging';
import { Oep8Command } from '../constants';

interface TransferFromInput {
  network?: string;
  scriptHash: string;
  tokenId: string;
  spender: string;
  from: string;
  to: string;
  amount: string;
}

interface TransferFromOutput {
  txid: string;
  nodeUrl: string;
}

export function transferFrom(data: TransferFromInput): Promise<TransferFromOutput> {
  return sendMessage({
    command: Oep8Command.transferFrom,
    data,
  });
}
