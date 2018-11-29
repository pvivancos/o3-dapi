import { sendMessage } from '../../messaging';
import { Command } from '../../constants';

interface GetBlockHeightByTxHashInput {
  hash: string;
  network?: string;
}

export function getBlockHeightByTxHash(data: GetBlockHeightByTxHashInput): Promise<number> {
  return sendMessage({
    command: Command.getBlockHeightByTxHash,
    data,
  });
}
