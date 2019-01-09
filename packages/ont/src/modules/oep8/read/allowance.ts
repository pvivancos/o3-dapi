import { sendMessage } from '../../../messaging';
import { Oep8Command } from '../constants';

interface AllowanceInput {
  network: string;
  scriptHash: string;
  tokenId: string;
  owner: string;
  spender: string;
}

export function allowance(data: AllowanceInput): Promise<string> {
  return sendMessage({
    command: Oep8Command.allowance,
    data,
  });
}
