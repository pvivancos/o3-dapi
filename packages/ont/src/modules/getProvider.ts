import { sendMessage } from '../messaging';
import { Command } from '../constants';

interface Provider {
  name: string;
  version: string;
  compatibility: string[];
  website: string;
  theme: string;
}

export function getProvider(): Promise<Provider> {
  return sendMessage({
    command: Command.getProvider,
  });
}
