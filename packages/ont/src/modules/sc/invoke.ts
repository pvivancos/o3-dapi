import { sendMessage } from '../../messaging';
import { Command } from '../../constants';
import { Parameter } from './common';

interface InvokeInput {
  scriptHash: string;
  operation: string;
  args?: Parameter[];
  gasPrice?: number;
  gasLimit?: number;
  requireIdentity?: boolean;
  payer?: string;
  network: string;
  broadcastOverride?: boolean;
}

interface InvokeOutput {
  txid: string;
  nodeUrl: string;
}

export function invoke(data: InvokeInput): Promise<InvokeOutput> {
  return sendMessage({
    command: Command.invoke,
    data,
  });
}
