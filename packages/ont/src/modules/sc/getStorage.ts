import { sendMessage } from '../../messaging';
import { Command } from '../../constants';

interface GetStorageInput {
  contract: string;
  key: string;
  network: string;
}

export function getStorage(data: GetStorageInput): Promise<string> {
  return sendMessage({
    command: Command.getStorage,
    data,
  });
}
