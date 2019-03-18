import {
  RestClient,
  GovernanceTxBuilder,
} from 'ontology-ts-sdk';
const GENESIS_STAKE_ROUND = 534300;
const ROUND_LENGTH = 120000;
import { ErrorMsg, Network } from '../../constants';
import { parseError, getNetworkUrl } from '../../utils';

interface GetStakeRoundInfoArgs {
  network: Network;
}

interface StakeRoundInfo {
  currentRound: number;
  currentBlock: number;
  blocksPerRound: number;
  startBlock: number;
  endBlock: number;
  remainingBlocks: number;
}

export function getStakeRoundInfo({
  network,
}: GetStakeRoundInfoArgs): Promise<StakeRoundInfo> {
  return new Promise((resolve, reject) => {
    try {
      const url = getNetworkUrl(network);

      Promise.all([
        new RestClient(url).getBlockHeight(),
        GovernanceTxBuilder.getGovernanceView(url),
      ])
      .then(([{Result}, {height}]) => {
        const startBlock = height;
        const endBlock = startBlock + ROUND_LENGTH;
        const currentBlock = Result;
        const currentRound = 1 + (startBlock - GENESIS_STAKE_ROUND) / ROUND_LENGTH;

        const data = {
          currentRound,
          currentBlock,
          blocksPerRound: ROUND_LENGTH,
          startBlock,
          endBlock,
          remainingBlocks: endBlock - currentBlock,
        };

        resolve(data);
      })
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
