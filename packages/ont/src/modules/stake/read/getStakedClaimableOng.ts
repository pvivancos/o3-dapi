import { sendMessage } from '../../../messaging';
import { StakeCommand } from '../constants';

interface GetStakedClaimableOngArgs {
  network?: string;
  address: string;
}

interface StakedClaimableOng {
  amount: string;
}

export function getStakedClaimableOng(data: GetStakedClaimableOngArgs): Promise<StakedClaimableOng> {
  return sendMessage({
    command: StakeCommand.getStakedClaimableOng,
    data,
  });
}
