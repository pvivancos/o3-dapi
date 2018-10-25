import { sendMessage } from '../../messaging';
import { Network, Command } from '../../constants';

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

export function getBalance(data: BalanceRequest|BalanceRequest[], network?: Network): Promise<BalanceResults> {
  return sendMessage({
    command: Command.getBalance,
    data,
    network,
  });
}
