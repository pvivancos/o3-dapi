import { sendMessage } from '../../messaging';
import { Command, Asset } from '../../constants';

interface Allowance {
  asset: Asset;
  fromAddress: string;
  toAddress: string;
  network?: string;
}

export function getAllowance(data: Allowance): Promise<Allowance> {
  return sendMessage({
    command: Command.getAllowance,
    data,
  });
}
