import { sendMessage } from '../../../messaging';
import { Oep8Command } from '../constants';

interface CompoundInput {
  network?: string;
  scriptHash: string;
  account: string;
  compoundNum: number;
}

interface CompoundOutput {
  txid: string;
  nodeUrl: string;
}

export function compound(data: CompoundInput): Promise<CompoundOutput> {
  return sendMessage({
    command: Oep8Command.compound,
    data,
  });
}
