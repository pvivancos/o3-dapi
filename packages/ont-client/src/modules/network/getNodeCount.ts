import { sendMessage } from '../../messaging';
import { Command } from '../../constants';

interface GetNodeCountArgs {
  network: string;
}

export function getNodeCount(data: GetNodeCountArgs): Promise<number> {
  return sendMessage({
    command: Command.getNodeCount,
    data,
  });
}
