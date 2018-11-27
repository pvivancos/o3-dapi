import { sendMessage } from '../../messaging';
import { Command } from '../../constants';

interface GetBlockHeightArgs {
  network?: string;
}

export function getBlockHeight(data: GetBlockHeightArgs): Promise<number> {
  return sendMessage({
    command: Command.getBlockHeight,
    data,
  });
}
