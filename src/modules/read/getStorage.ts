import { sendMessage } from '../../messaging';
import { Command } from '../../constants';

interface GetStorageArgs {
  scriptHash: string;
  key: string;
}

export function getStorage(data: GetStorageArgs, network?: string): Promise<string> {
  return sendMessage({
    command: Command.getStorage,
    data,
    network,
  });
}
