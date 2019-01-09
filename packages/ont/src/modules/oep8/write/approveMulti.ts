import { sendMessage } from '../../../messaging';
import { Oep8Command } from '../constants';

interface Output {
  tokenId: string;
  owner: string;
  spender: string;
  amount: string;
}

interface ApproveMultiInput {
  network: string;
  scriptHash: string;
  outputs: Output[];
}

interface ApproveMultiOutput {
  txid: string;
  nodeUrl: string;
}

export function approveMulti(data: ApproveMultiInput): Promise<ApproveMultiOutput> {
  return sendMessage({
    command: Oep8Command.approveMulti,
    data,
  });
}
