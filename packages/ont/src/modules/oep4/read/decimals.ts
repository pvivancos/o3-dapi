import { sendMessage } from '../../../messaging';
import { Oep4Command } from '../constants';

interface DecimalsInput {
  network?: string;
  scriptHash: string;
}

export function decimals(data: DecimalsInput): Promise<number> {
  return sendMessage({
    command: Oep4Command.decimals,
    data,
  });
}
