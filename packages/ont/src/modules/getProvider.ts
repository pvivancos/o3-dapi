import { sendMessage } from '../messaging';
import { Command } from '../constants';

interface Provider {
  name: string;
  version: string;
  compatibility: string[];
  website: string;
  extra: {
    theme: string,
    currency: string,
  };
}

export function getProvider(): Promise<Provider> {
  return sendMessage({
    command: Command.getProvider,
  });
}
