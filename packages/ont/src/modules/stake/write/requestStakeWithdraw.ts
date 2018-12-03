import { sendMessage } from '../../../messaging';
import { StakeCommand } from '../constants';

interface RequestStakeWithdrawInput {
  network?: string;
  nodePublicKey: string;
  amount: number;
  gasPrice?: number;
  gasLimit?: number;
}

interface RequestStakeWithdrawOutput {
  txid: string;
  nodeUrl: string;
}

export function requestStakeWithdraw(data: RequestStakeWithdrawInput): Promise<RequestStakeWithdrawOutput> {
  return sendMessage({
    command: StakeCommand.requestStakeWithdraw,
    data,
  });
}
