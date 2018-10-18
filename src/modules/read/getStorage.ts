import { sendMessage } from '../../messaging';
import { GET_STORAGE } from '../../constants/commands';

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
