import { sendMessage } from '../../messaging';
import { Network, Command } from '../../constants';

interface GetStorageArgs {
  scriptHash: string;
  key: string;
}

export function getStorage(data: GetStorageArgs, network?: Network): Promise<string> {
  return sendMessage({
    command: Command.getStorage,
    data,
    network,
  });
}
