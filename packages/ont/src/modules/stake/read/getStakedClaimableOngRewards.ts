import { sendMessage } from '../../../messaging';
import { StakeCommand } from '../constants';

interface GetStakedClaimableOngRewardsArgs {
  network: string;
  address: string;
}

interface StakedClaimableOngRewards {
  amount: string;
}

export function getStakedClaimableOngRewards(data: GetStakedClaimableOngRewardsArgs): Promise<StakedClaimableOngRewards> {
  return sendMessage({
    command: StakeCommand.getStakedClaimableOngRewards,
    data,
  });
}
