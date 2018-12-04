import { sendMessage } from '../../../messaging';
import { StakeCommand } from '../constants';

interface AddStakeInput {
  network?: string;
  nodePublicKey: string;
  amount: number;
  gasPrice?: number;
  gasLimit?: number;
}

interface AddStakeOutput {
  txid: string;
  nodeUrl: string;
}

export function addStake(data: AddStakeInput): Promise<AddStakeOutput> {
  return sendMessage({
    command: StakeCommand.addStake,
    data,
  });
}
