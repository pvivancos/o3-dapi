import { sendMessage } from '../../../messaging';
import { Oep8Command } from '../constants';

interface InitInput {
  network: string;
}

interface InitOutput {
  txid: string;
  nodeUrl: string;
}

export function init(data: InitInput): Promise<InitOutput> {
  return sendMessage({
    command: Oep8Command.init,
    data,
  });
}
