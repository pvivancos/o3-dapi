import { sendMessage } from '../../../messaging';
import { Nep5Command } from '../constants';

interface DecimalsInput {
  network?: string;
  scriptHash: string;
}

export function decimals(data: DecimalsInput): Promise<number> {
  return sendMessage({
    command: Nep5Command.decimals,
    data,
  });
}
