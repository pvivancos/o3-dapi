import { sendMessage } from '../../messaging';
import { Command } from '../../constants';

interface Account {
  address: string;
  publicKey: string;
}

export function getAccount(): Promise<Account> {
  return sendMessage({
    command: Command.getAccount,
  });
}
