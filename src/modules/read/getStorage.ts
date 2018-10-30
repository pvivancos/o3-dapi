import { sendMessage } from '../../messaging';
import { Command } from '../../constants';

interface GetStorageArgs {
  scriptHash: string;
  key: string;
  network?: string;
}

export function getStorage(data: GetStorageArgs): Promise<string> {
  return sendMessage({
    command: Command.getStorage,
    data,
  });
}
