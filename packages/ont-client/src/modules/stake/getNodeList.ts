import {
  GovernanceTxBuilder,
  Crypto,
} from 'ontology-ts-sdk';

const {
  Address,
} = Crypto;
import { ErrorMsg, Network } from '../../constants';
import { parseError, getNetworkUrl } from '../../utils';
import { TEMP_NODE_NAME_MAP, NODE_DETAIL_URL } from '../../constants';

interface GetNodeListArgs {
  network: Network;
}

interface NodeListOutput {
  nodes: Node[];
}

interface Node {
  address: string;
  publicKey: string;
  isConsensusNode: boolean;
  name: string;
  url: string;
  logo: string;
  description: string;
  region: string;
  ownerStake: number;
  usersStake: number;
  totalStake: number;
  stakePercentFilled: string;
  userRewardsAllocation: string;
  maxUserStake: number;
  maxStake: number;
}

export function getNodeList({network}: GetNodeListArgs): Promise<NodeListOutput> {

  return new Promise((resolve, reject) => {
    try {
      const url = getNetworkUrl(network);

      let peerPoolMap;
      let metadataMap;
      Promise.all([
        GovernanceTxBuilder.getPeerPoolMap(url),
        getNodeMetadata(),
      ])
      .then(([peerPoolRes, metadataRes]) => {
        peerPoolMap = peerPoolRes;
        metadataMap = metadataRes.reduce((accum, item: any) => {
          accum[item['public_key']] = item;
          return accum;
        }, {});
        return Promise.all(Object.keys(peerPoolMap).map(peerPubkey => (
          GovernanceTxBuilder.getAttributes(peerPubkey, url)
        )));
      })
      .then(res => {
        const nodeDetailsMap = res.reduce((accum, item) => {
          accum[item.peerPubkey] = item;
          return accum;
        }, {});

        const unsortedNodeList = Object.values(peerPoolMap).reduce((accum: any[], item: any) => {
          const {
            peerPubkey,
            initPos,
            totalPos,
          } = item;

          if (!nodeDetailsMap[peerPubkey]) {
            return accum;
          }

          const {
            maxAuthorize,
            t1PeerCost,
          } = nodeDetailsMap[peerPubkey];

          const {
            introduction: Introduce,
            logo_url: Logo,
            name: Name,
            region: Region,
          } = metadataMap[peerPubkey] || {
            Introduce: '',
            Logo: '',
            Name: '',
            Region: '',
          };

          const address = (new Address(item.address.value)).toBase58();
          const publicKey = peerPubkey;
          const isConsensusNode = item.status === 2;
          const name = Name || TEMP_NODE_NAME_MAP[peerPubkey];
          const logo = Logo;
          const description = Introduce;
          const region = Region;
          const url = NODE_DETAIL_URL + publicKey;
          const totalStake = initPos + totalPos;
          const maxStake = initPos + maxAuthorize;
          const stakePercentFilled = totalStake / maxStake;
          const userRewardsAllocation = (100 - t1PeerCost) / 100;

          accum.push({
            address,
            publicKey,
            isConsensusNode,
            name,
            logo,
            url,
            description,
            region,
            ownerStake: initPos,
            usersStake: totalPos,
            totalStake,
            maxStake,
            stakePercentFilled,
            userRewardsAllocation,
            maxUserStake: maxAuthorize,
          });

          return accum;
        }, []);

        const sortedNodeList = (unsortedNodeList as any).sort((a, b) => a.totalStake < b.totalStake ? 1 : -1);

        resolve({
          nodes: sortedNodeList,
        });
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

function getNodeMetadata() {
  return Promise.all([fetch('https://explorer.ont.io/v2/nodes/off-chain-infos'), fetch('https://explorer.ont.io/v2/nodes/current-stakes')])
  .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
  .then(([offChainInfosRes, onStakeRes]) => {
    if (offChainInfosRes.msg !== 'SUCCESS') {
      throw new Error(`Error while getting off chain infos: ${offChainInfosRes.msg}`);
    }
    if (onStakeRes.msg !== 'SUCCESS') {
      throw new Error(`Error while getting off on stake nodes info: ${offChainInfosRes.msg}`);
    }
    return offChainInfosRes.result.filter(nodeInfo => onStakeRes.result.some(onStakeNode => onStakeNode.address === nodeInfo.address));
  });
}
