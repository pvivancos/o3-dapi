import { sendMessage } from '../../../messaging';
import { Nep5Command } from '../constants';

interface InitInput {
  network?: string;
}

interface InitOutput {
  txid: string;
  nodeUrl: string;
}

export function init(data: InitInput): Promise<InitOutput> {
  return sendMessage({
    command: Nep5Command.init,
    data,
  });
}
