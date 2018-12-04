import * as assets from './modules/assets';
import * as identity from './modules/identity';
import * as message from './modules/message';
import * as sc from './modules/sc';
import * as tx from './modules/tx';
import * as network from './modules/network';
import * as stake from './modules/stake';

import { getProvider } from './modules/getProvider';
import { getAccount } from './modules/getAccount';
import { getNetworks } from './modules/getNetworks';

import { ParameterType } from './modules/sc/common';

import { addEventListener, removeEventListener } from './modules/eventListener';

import {
  EventName,
  BLOCKCHAIN,
} from './constants';

import { initMessaging } from './messaging';

class O3dapiOnt {

  static blockchain = BLOCKCHAIN;

  isAvailable = Boolean((window as any)._o3dapi.isAvailable);
  getProvider = getProvider;
  getNetworks = getNetworks;
  getAccount = getAccount;

  identity = {
    getIdentity: identity.getIdentity,
    getDDO: identity.getDDO,
    addAttributes: identity.addAttributes,
    removeAttribute: identity.removeAttribute,
  };

  message = {
    signMessage: message.signMessage,
    verifyMessage: message.verifyMessage,
    // signMessageHash: message.signMessageHash,
    // verifyMessageHash: message.verifyMessageHash,
  };

  network = {
    getNodeCount: network.getNodeCount,
    getBlockHeight: network.getBlockHeight,
    getMerkleProof: network.getMerkleProof,
    getBlock: network.getBlock,
    getBlockHash: network.getBlockHash,
    getVersion: network.getVersion,
  };

  tx = {
    getBlockHeightByTxHash: tx.getBlockHeightByTxHash,
    getMempoolTxCount: tx.getMempoolTxCount,
    getMempoolTxState: tx.getMempoolTxState,
    getSmartCodeEvent: tx.getSmartCodeEvent,
    getGasPrice: tx.getGasPrice,
    getBlockTxsByHeight: tx.getBlockTxsByHeight,
    getTransaction: tx.getTransaction,
  };

  assets = {
    getAllowance: assets.getAllowance,
    getBalance: assets.getBalance,
    getGrantOng: assets.getGrantOng,
    getUnboundOng: assets.getUnboundOng,
    send: assets.send,
  };

  sc = {
    getContract: sc.getContract,
    getStorage: sc.getStorage,
    invoke: sc.invoke,
    invokeRead: sc.invokeRead,
    deploy: sc.deploy,
  };

  stake = {
    getStakeRoundInfo: stake.getStakeRoundInfo,
    getNodeList: stake.getNodeList,
    getTotalStake: stake.getTotalStake,
    getNodeStakeInfo: stake.getNodeStakeInfo,
    getStakedClaimableOng: stake.getStakedClaimableOng,
    getStakedClaimableOngRewards: stake.getStakedClaimableOngRewards,

    addStake: stake.addStake,
    requestStakeWithdraw: stake.requestStakeWithdraw,
    withdrawStake: stake.withdrawStake,
    claimStakedOng: stake.claimStakedOng,
    claimStakedOngRewards: stake.claimStakedOngRewards,
  };

  addEventListener = addEventListener;
  removeEventListener = removeEventListener;

  Constants = {
    EventName,
    ParameterType,
  };

  constructor(sendMessageMethod, addEventListenerMethod) {
    initMessaging(sendMessageMethod, addEventListenerMethod);
  }
}

export default O3dapiOnt;
