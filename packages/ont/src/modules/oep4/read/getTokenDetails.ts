import { sendMessage } from '../../../messaging';
import { Oep4Command } from '../constants';

interface TokenDetailsInput {
  network?: string;
  scriptHash: string;
}

interface TokenDetailsOutput {
  name: string;
  symbol: string;
  decimals: string;
  totalSupply: string;
}

export function getTokenDetails(data: TokenDetailsInput): Promise<TokenDetailsOutput> {
  return sendMessage({
    command: Oep4Command.getTokenDetails,
    data,
  });
}
