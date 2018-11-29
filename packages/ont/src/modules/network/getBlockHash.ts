import { sendMessage } from '../../messaging';
import { Command } from '../../constants';

interface GetBlockHashInput {
  height: number;
  network?: string;
}

export function getBlockHash(data: GetBlockHashInput): Promise<string> {
  return sendMessage({
    command: Command.getBlockHash,
    data,
  });
}
