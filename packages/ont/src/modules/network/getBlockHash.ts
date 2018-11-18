import { sendMessage } from '../../messaging';
import { Command } from '../../constants';

interface GetBlockHashInput {
  height: number;
}

export function getBlockHash(data: GetBlockHashInput): Promise<string> {
  return sendMessage({
    command: Command.getBlockHash,
    data,
  });
}
