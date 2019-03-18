import {
  GovernanceTxBuilder,
  Crypto,
} from 'ontology-ts-sdk';

const {
  Address,
} = Crypto;
import { ErrorMsg, Network } from '../../constants';
import { parseError, getNetworkUrl } from '../../utils';

interface GetNodeStakeInfoArgs {
  network: Network;
  address: string;
  nodePublicKey: string;
}

interface NodeStakeInfo {
  publicKey: string;
  activeStake: number;
  pendingStake: number;
  pendingWithdrawStake: number;
  withdrawableStake: number;
}

export function getNodeStakeInfo({
  network,
  address,
  nodePublicKey,
}: GetNodeStakeInfoArgs): Promise<NodeStakeInfo> {
  return new Promise((resolve, reject) => {
    try {
      const url = getNetworkUrl(network);

      GovernanceTxBuilder.getAuthorizeInfo(nodePublicKey, new Address(address), url)
      .then(res => {
        const {
          consensusPos,
          freezePos,
          newPos,
          withdrawFreezePos,
          withdrawPos,
          withdrawUnfreezePos,
        } = res;

        const data = {
          publicKey: nodePublicKey,
          activeStake: consensusPos + freezePos,
          pendingStake: newPos,
          pendingWithdrawStake: withdrawPos + withdrawFreezePos,
          withdrawableStake: withdrawUnfreezePos,
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
