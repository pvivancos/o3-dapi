import { sendMessage } from '../messaging';
import { Command } from '../constants';

interface GetAccountArgs {
  publicKey?: boolean;
}

interface AccountOutput {
  address: string;
  label: string;
  publicKey?: string;
}

export function getAccount(data?: GetAccountArgs): Promise<AccountOutput> {
  return sendMessage({
    command: Command.getAccount,
    data,
  });
}
