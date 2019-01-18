import { sendMessage } from '../../messaging';
import { Command } from '../../constants';

interface GetAccountArgs {
  publicKey?: boolean;
}

interface Account {
  address: string;
  label: string;
  publicKey?: string;
}

export function getAccount(data?: GetAccountArgs): Promise<Account> {
  return sendMessage({
    command: Command.getAccount,
    data,
  });
}
