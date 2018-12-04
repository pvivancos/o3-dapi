import { sendMessage } from '../../../messaging';
import { StakeCommand } from '../constants';

interface GetNodeListArgs {
  network?: string;
}

interface NodeList {
  address: string;
  publicKey: string;
  isConsensusNode: boolean;
  name: string;
  url: string;
  totalStake: number;
  stakePercentFilled: string;
  userRewardsAllocation: string;
}

export function getNodeList(data: GetNodeListArgs): Promise<NodeList> {
  return sendMessage({
    command: StakeCommand.getNodeList,
    data,
  });
}
