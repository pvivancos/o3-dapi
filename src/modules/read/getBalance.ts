import { sendMessage } from '../../messaging';
import { Command } from '../../constants';

interface BalanceRequest {
  address: string; // Address to check balance(s)
  asset?: string; // Asset symbol or script hash to check balance
}

interface GetBalanceArgs {
  query: BalanceRequest|BalanceRequest[];
  network?: string;
}

interface BalanceResults {
  [address: string]: Balance[];
}

interface Balance {
  scriptHash: string;
  symbol: string;
  amount: string;
}

export function getBalance(data: GetBalanceArgs): Promise<BalanceResults> {
  return sendMessage({
    command: Command.getBalance,
    data,
  });
}
