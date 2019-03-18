import { sendMessage } from '../../../messaging';
import { StakeCommand } from '../constants';

interface GetStakeRoundInfoArgs {
  network: string;
}

interface StakeRoundInfo {
  currentRound: number;
  currentBlock: number;
  blocksPerRound: number;
  startBlock: number;
  endBlock: number;
  remainingBlocks: number;
}

export function getStakeRoundInfo(data: GetStakeRoundInfoArgs): Promise<StakeRoundInfo> {
  return sendMessage({
    command: StakeCommand.getStakeRoundInfo,
    data,
  });
}
