import { sendMessage } from '../../../messaging';
import { Nep5Command } from '../constants';

interface TotalSupplyInput {
  network?: string;
  scriptHash: string;
}

export function totalSupply(data: TotalSupplyInput): Promise<number> {
  return sendMessage({
    command: Nep5Command.totalSupply,
    data,
  });
}
