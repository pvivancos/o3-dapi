import { sendMessage } from '../../../messaging';
import { Oep8Command } from '../constants';

interface TotalSupplyInput {
  network: string;
  scriptHash: string;
  tokenId: string;
}

export function totalSupply(data: TotalSupplyInput): Promise<number> {
  return sendMessage({
    command: Oep8Command.totalSupply,
    data,
  });
}
