import { sendMessage } from '../../messaging';
import { Command, Transaction } from '../../constants';

interface GetBlockInput {
  network: string;
  block: number | string;
}

interface BlockHeader {
  Version: number;
  PrevBlockHash: string;
  TransactionsRoot: string;
  BlockRoot: string;
  Timestamp: number;
  Height: number;
  ConsensusData: number;
  ConsensusPayload: string;
  NextBookkeeper: string;
  Bookkeepers: string[];
  SigData: string[];
  Hash: string;
}

interface Block {
  Hash: string;
  Size: number;
  Header: BlockHeader;
  Transactions: Transaction[];
}

export function getBlock(data: GetBlockInput): Promise<Block> {
  return sendMessage({
    command: Command.getBlock,
    data,
  });
}
