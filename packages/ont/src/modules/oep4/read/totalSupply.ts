import { sendMessage } from '../../../messaging';
import { Oep4Command } from '../constants';

interface TotalSupplyInput {
  network?: string;
  scriptHash: string;
}

export function totalSupply(data: TotalSupplyInput): Promise<number> {
  return sendMessage({
    command: Oep4Command.totalSupply,
    data,
  });
}
