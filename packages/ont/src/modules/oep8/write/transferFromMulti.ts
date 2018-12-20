import { sendMessage } from '../../../messaging';
import { Oep8Command } from '../constants';

interface Output {
  tokenId: string;
  spender: string;
  from: string;
  to: string;
  amount: string;
}

interface TransferFromInput {
  network: string;
  scriptHash: string;
  outputs: Output[];
}

interface TransferFromOutput {
  txid: string;
  nodeUrl: string;
}

export function transferFromMulti(data: TransferFromInput): Promise<TransferFromOutput> {
  return sendMessage({
    command: Oep8Command.transferFromMulti,
    data,
  });
}
