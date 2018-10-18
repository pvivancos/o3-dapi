import { sendMessage } from '../messaging';
import { MSG_COMMANDS } from '../constants';
const { GET_ACCOUNT } = MSG_COMMANDS;

interface Account {
  address: string;
  publicKey: string;
}

export function getAccount(): Promise<Account> {
  return sendMessage({
    command: GET_ACCOUNT,
  });
}
