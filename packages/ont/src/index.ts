declare const global: any;
const isBrowser = typeof window !== 'undefined';
const safeWindow = isBrowser ? window : global;
import * as assets from './modules/assets';
import * as identity from './modules/identity';
import * as message from './modules/message';
import * as sc from './modules/sc';
import * as tx from './modules/tx';
import * as network from './modules/network';
import * as stake from './modules/stake';
import * as oep4 from './modules/oep4';
import { getProvider } from './modules/getProvider';
import { getAccount, getPublicKey } from './modules/account';
import { getNetworks } from './modules/getNetworks';
import { disconnect } from './modules/disconnect';
import { ParameterType } from './modules/sc/common';
import { addEventListener, removeEventListener } from './modules/eventListener';
import { methodSelector } from './utils';

import {
  EventName,
  BLOCKCHAIN,
} from './constants';

import { initMessaging } from './messaging';

class O3dapiOnt {

  static blockchain = BLOCKCHAIN;

  isAvailable = Boolean(safeWindow._o3dapi.isAvailable);
  getProvider = getProvider;
  getNetworks = getNetworks;
  getAccount = getAccount;
  getPublicKey = getPublicKey;
  disconnect = disconnect;

  // identity = {
    // getIdentity: identity.getIdentity,
    // getDDO: identity.getDDO,
    // addAttributes: identity.addAttributes,
    // removeAttribute: identity.removeAttribute,
  // };

  message = {
    verifyMessage: methodSelector(this, 'message', 'getBalance', message.verifyMessage),

    signMessage: message.signMessage,
    // signMessageHash: message.signMessageHash,
    // verifyMessageHash: message.verifyMessageHash,
  };

  network = {
    getNodeCount: methodSelector(this, 'network', 'getNodeCount', network.getNodeCount),
    getBlockHeight: methodSelector(this, 'network', 'getBlockHeight', network.getBlockHeight),
    getMerkleProof: methodSelector(this, 'network', 'getMerkleProof', network.getMerkleProof),
    getBlock: methodSelector(this, 'network', 'getBlock', network.getBlock),
    getBlockHash: methodSelector(this, 'network', 'getBlockHash', network.getBlockHash),
    getVersion: methodSelector(this, 'network', 'getVersion', network.getVersion),
  };

  tx = {
    getBlockHeightByTxHash: methodSelector(this, 'tx', 'getBlockHeightByTxHash', tx.getBlockHeightByTxHash),
    getMempoolTxCount: methodSelector(this, 'tx', 'getMempoolTxCount', tx.getMempoolTxCount),
    getMempoolTxState: methodSelector(this, 'tx', 'getMempoolTxState', tx.getMempoolTxState),
    getSmartCodeEvent: methodSelector(this, 'tx', 'getSmartCodeEvent', tx.getSmartCodeEvent),
    getGasPrice: methodSelector(this, 'tx', 'getGasPrice', tx.getGasPrice),
    getBlockTxsByHeight: methodSelector(this, 'tx', 'getBlockTxsByHeight', tx.getBlockTxsByHeight),
    getTransaction: methodSelector(this, 'tx', 'getTransaction', tx.getTransaction),
  };

  assets = {
    getAllowance: methodSelector(this, 'assets', 'getAllowance', assets.getAllowance),
    getBalance: methodSelector(this, 'assets', 'getBalance', assets.getBalance),
    getGrantOng: methodSelector(this, 'assets', 'getGrantOng', assets.getGrantOng),
    getUnboundOng: methodSelector(this, 'assets', 'getUnboundOng', assets.getUnboundOng),
  };

  sc = {
    getContract: methodSelector(this, 'sc', 'getContract', sc.getContract),
    getStorage: methodSelector(this, 'sc', 'getStorage', sc.getStorage),
    invokeRead: methodSelector(this, 'sc', 'invokeRead', sc.invokeRead),

    invoke: sc.invoke,
    deploy: sc.deploy,
  };

  stake = {
    getStakeRoundInfo: methodSelector(this, 'stake', 'getStakeRoundInfo', stake.getStakeRoundInfo),
    getNodeList: methodSelector(this, 'stake', 'getNodeList', stake.getNodeList),
    getTotalStake: methodSelector(this, 'stake', 'getTotalStake', stake.getTotalStake),
    getNodeStakeInfo: methodSelector(this, 'stake', 'getNodeStakeInfo', stake.getNodeStakeInfo),
    getStakedClaimableOng: methodSelector(this, 'stake', 'getStakedClaimableOng', stake.getStakedClaimableOng),
    getStakedClaimableOngRewards: methodSelector(this, 'stake', 'getStakedClaimableOngRewards', stake.getStakedClaimableOngRewards),

    addStake: stake.addStake,
    requestStakeWithdraw: stake.requestStakeWithdraw,
    withdrawStake: stake.withdrawStake,
    claimStakedOng: stake.claimStakedOng,
    claimStakedOngRewards: stake.claimStakedOngRewards,
  };

  oep4 = {
    getAllowance: methodSelector(this, 'oep4', 'getAllowance', oep4.getAllowance),
    getBalanceOf: methodSelector(this, 'oep4', 'getBalanceOf', oep4.getBalanceOf),
    getTotalSupply: methodSelector(this, 'oep4', 'getTotalSupply', oep4.getTotalSupply),
    getSymbol: methodSelector(this, 'oep4', 'getSymbol', oep4.getSymbol),
    getDecimals: methodSelector(this, 'oep4', 'getDecimals', oep4.getDecimals),
    getName: methodSelector(this, 'oep4', 'getName', oep4.getName),
    getTokenDetails: methodSelector(this, 'oep4', 'getTokenDetails', oep4.getTokenDetails),

    init: oep4.init,
    transfer: oep4.transfer,
    transferMulti: oep4.transferMulti,
    approve: oep4.approve,
    transferFrom: oep4.transferFrom,
  };

  addEventListener = addEventListener;
  removeEventListener = removeEventListener;

  Constants = {
    EventName,
    ParameterType,
  };

  private clientPlugin;

  constructor(sendMessageMethod, addEventListenerMethod) {
    initMessaging(sendMessageMethod, addEventListenerMethod);
  }

  setClientPlugin(plugin) {
    this.clientPlugin = plugin;
  }
}

export default O3dapiOnt;
