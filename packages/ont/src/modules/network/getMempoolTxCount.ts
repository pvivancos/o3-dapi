import { sendMessage } from '../../messaging';
import { Command } from '../../constants';

export function getMempoolTxCount(): Promise<number[]> {
  return sendMessage({
    command: Command.getMempoolTxCount,
  });
}
