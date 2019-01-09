import { sendMessage } from '../../messaging';
import { Command } from '../../constants';

interface GetBlockTxsByHeightInput {
  height: number;
  network: string;
}

interface BlockWithTxList {
  Hash: string;
  Height: number;
  Transactions: string[];
}

export function getBlockTxsByHeight(data: GetBlockTxsByHeightInput): Promise<BlockWithTxList> {
  return sendMessage({
    command: Command.getBlockTxsByHeight,
    data,
  });
}
