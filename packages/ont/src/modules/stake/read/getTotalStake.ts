import { sendMessage } from '../../../messaging';
import { StakeCommand } from '../constants';

interface GetTotalStakeArgs {
  network?: string;
  address: string;
}

interface TotalStake {
  amount: number;
}

export function getTotalStake(data: GetTotalStakeArgs): Promise<TotalStake> {
  return sendMessage({
    command: StakeCommand.getTotalStake,
    data,
  });
}
