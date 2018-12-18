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
  logo: string;
  description: string;
  region: string;
  ownerStake: number;
  usersStake: number;
  totalStake: number;
  stakePercentFilled: string;
  userRewardsAllocation: string;
  maxUserStake: number;
  maxStake: number;
}

export function getNodeList(data: GetNodeListArgs): Promise<NodeList> {
  return sendMessage({
    command: StakeCommand.getNodeList,
    data,
  });
}
