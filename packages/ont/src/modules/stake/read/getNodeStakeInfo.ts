import { sendMessage } from '../../../messaging';
import { StakeCommand } from '../constants';

interface GetNodeStakeInfoArgs {
  network?: string;
  address: string;
  nodePublicKey: string;
}

interface NodeStakeInfo {
  publicKey: string;
  activeStake: number;
  pendingStake: number;
  pendingWithdrawStake: number;
  withdrawableStake: number;
}

export function getNodeStakeInfo(data: GetNodeStakeInfoArgs): Promise<NodeStakeInfo> {
  return sendMessage({
    command: StakeCommand.getNodeStakeInfo,
    data,
  });
}
