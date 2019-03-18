import { sendMessage } from '../../messaging';
import { Command } from '../../constants';

interface GetMempoolTxCountInput {
  network: string;
}

export function getMempoolTxCount(data: GetMempoolTxCountInput): Promise<number[]> {
  return sendMessage({
    command: Command.getMempoolTxCount,
    data,
  });
}
