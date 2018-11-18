import { sendMessage } from '../../messaging';
import { Command } from '../../constants';
import { Parameter } from './common';

type Result = string[];

interface InvokeResponse {
  transaction: string;
  results: Result[];
}

interface InvokeInput {
  scriptHash: string;
  operation: string;
  args?: Parameter[];
  gasPrice?: number;
  gasLimit?: number;
  requireIdentity?: boolean;
}

export function invoke(data: InvokeInput): Promise<InvokeResponse> {
  return sendMessage({
    command: Command.invoke,
    data,
  });
}
