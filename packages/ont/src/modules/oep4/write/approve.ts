import { sendMessage } from '../../../messaging';
import { Oep4Command } from '../constants';

interface ApproveInput {
  network?: string;
  scriptHash: string;
  owner: string;
  spender: string;
  amount: string;
}

interface ApproveOutput {
  txid: string;
  nodeUrl: string;
}

export function approve(data: ApproveInput): Promise<ApproveOutput> {
  return sendMessage({
    command: Oep4Command.approve,
    data,
  });
}
