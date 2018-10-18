import { sendMessage } from '../../messaging';
import { GET_BALANCE } from '../../constants/commands';

interface BalanceRequest {
  address: string; // Address to check balance(s)
  asset?: string; // Asset symbol or script hash to check balance
}

interface BalanceResults {
  [address: string]: Balances;
}

interface Balances {
  [asset: string]: string;
}

export function getBalance(data: BalanceRequest|BalanceRequest[]): Promise<BalanceResults> {
  return sendMessage({
    command: GET_BALANCE,
    data,
  });
}
