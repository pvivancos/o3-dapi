import { sendMessage } from '../../messaging';
import { Command } from '../../constants';
import { Parameter } from './common';

interface InvokeReadInput {
  scriptHash: string;
  operation: string;
  args?: Parameter[];
}

export function invokeRead(data: InvokeReadInput): Promise<any> {
  return sendMessage({
    command: Command.invokeRead,
    data,
  });
}
