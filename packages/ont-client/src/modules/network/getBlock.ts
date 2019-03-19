import {
  RestClient,
} from 'ontology-ts-sdk';
import { ErrorMsg, Network } from '../../constants';
import { parseError, getNetworkUrl } from '../../utils';
import { Transaction } from '../../constants';

interface GetBlockInput {
  network: Network;
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

export function getBlock({ network, block }: GetBlockInput): Promise<Block> {
  return new Promise((resolve, reject) => {
    try {
      const url = getNetworkUrl(network);

      new RestClient(url).getBlockJson(Number.isNaN(Number(block)) ? block : Number(block))
      .then(res => res.Result)
      .then(resolve)
      .catch(err => {
        reject({
          type: ErrorMsg.UNKNOWN_ERROR,
          description: parseError(err),
        });
      });
    } catch (err) {
      reject({
        type: ErrorMsg.UNKNOWN_ERROR,
        description: parseError(err),
      });
    }
  });
}
