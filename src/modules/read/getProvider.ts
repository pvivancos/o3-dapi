import { sendMessage } from '../../messaging';
import { GET_PROVIDER } from '../../constants/commands';

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
