import { sendMessage } from '../messaging';
import { MSG_COMMANDS } from '../constants';
const { GET_PROVIDER } = MSG_COMMANDS;

interface Provider {
  name: string;
  website: string;
  version: string;
  compatibility: string[];
}

export function getProvider(): Promise<Provider> {
  return sendMessage({
    command: GET_PROVIDER,
  });
}
