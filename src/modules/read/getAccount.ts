import { sendMessage } from '../../messaging';
import { GET_ACCOUNT } from '../../constants/commands';

interface Account {
  address: string;
  publicKey: string;
}

export function getAccount(): Promise<Account> {
  return sendMessage({
    command: GET_ACCOUNT,
  });
}
