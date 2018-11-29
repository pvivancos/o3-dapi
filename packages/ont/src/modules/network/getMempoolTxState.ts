import { sendMessage } from '../../messaging';
import { Command } from '../../constants';

interface GetMempoolTxStateInput {
  hash: string;
  network?: string;
}

export function getMempoolTxState(data: GetMempoolTxStateInput): Promise<any> {
  return sendMessage({
    command: Command.getMempoolTxState,
    data,
  });
}
