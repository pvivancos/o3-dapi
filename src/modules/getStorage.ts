import { sendMessage } from '../messaging';
import { MSG_COMMANDS } from '../constants';
const { GET_STORAGE } = MSG_COMMANDS;

interface GetStorageArgs {
  scriptHash: string;
  key: string;
}

export function getStorage(data: GetStorageArgs): Promise<string> {
  return sendMessage({
    command: GET_STORAGE,
    data,
  });
}
