import { sendMessage } from '../../../messaging';
import { StakeCommand } from '../constants';

interface ClaimStakedOngInput {
  network?: string;
}

interface ClaimStakedOngOutput {
  txid: string;
  nodeUrl: string;
}

export function claimStakedOng(data: ClaimStakedOngInput): Promise<ClaimStakedOngOutput> {
  return sendMessage({
    command: StakeCommand.claimStakedOng,
    data,
  });
}
