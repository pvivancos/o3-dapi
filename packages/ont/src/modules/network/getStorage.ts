import { sendMessage } from '../../messaging';
import { Command } from '../../constants';

interface GetStorageInput {
  contract: string;
  key: string;
}

export function getStorage(data: GetStorageInput): Promise<string> {
  return sendMessage({
    command: Command.getStorage,
    data,
  });
}
