import { getAccount } from './modules/asset/getAccount';
import { getPublicKey } from './modules/asset/getPublicKey';
import { send } from './modules/asset/send';

import { getIdentity } from './modules/identity/getIdentity';
import { getDDO } from './modules/identity/getDDO';
import { addAttributes } from './modules/identity/addAttributes';
import { removeAttribute } from './modules/identity/removeAttribute';

import { signMessage } from './modules/message/signMessage';
import { signMessageHash } from './modules/message/signMessageHash';
import { verifyMessage } from './modules/message/verifyMessage';
import { verifyMessageHash } from './modules/message/verifyMessageHash';

import { getNodeCount } from './modules/network/getNodeCount';
import { getBlockHeight } from './modules/network/getBlockHeight';
import { getMerkleProof } from './modules/network/getMerkleProof';
import { getStorage } from './modules/network/getStorage';
import { getAllowance } from './modules/network/getAllowance';
import { getBlock } from './modules/network/getBlock';
import { getTransaction } from './modules/network/getTransaction';
import { getNetworks } from './modules/network/getNetworks';
import { getBalance } from './modules/network/getBalance';
import { getUnboundOng } from './modules/network/getUnboundOng';
import { getContract } from './modules/network/getContract';
import { getSmartCodeEvent } from './modules/network/getSmartCodeEvent';
import { getBlockHeightByTxHash } from './modules/network/getBlockHeightByTxHash';
import { getBlockHash } from './modules/network/getBlockHash';
import { getBlockTxsByHeight } from './modules/network/getBlockTxsByHeight';
import { getGasPrice } from './modules/network/getGasPrice';
import { getGrantOng } from './modules/network/getGrantOng';
import { getMempoolTxCount } from './modules/network/getMempoolTxCount';
import { getMempoolTxState } from './modules/network/getMempoolTxState';
import { getVersion } from './modules/network/getVersion';

import { getProvider } from './modules/provider/getProvider';

import { invoke } from './modules/smartContract/invoke';
import { invokeRead } from './modules/smartContract/invokeRead';
import { deploy } from './modules/smartContract/deploy';
import { ParameterType } from './modules/smartContract/common';

import { addEventListener, removeEventListener } from './modules/eventListener';

import {
  EventName,
  BLOCKCHAIN,
} from './constants';

import { initMessaging } from './messaging';

class O3dapiOnt {

  static blockchain = BLOCKCHAIN;

  isAvailable = Boolean((window as any)._o3dapi.isAvailable);

  getAccount = getAccount;
  getPublicKey = getPublicKey;
  send = send;

  getIdentity = getIdentity;
  getDDO = getDDO;
  addAttributes = addAttributes;
  removeAttribute = removeAttribute;

  signMessage = signMessage;
  signMessageHash = signMessageHash;
  verifyMessage = verifyMessage;
  verifyMessageHash = verifyMessageHash;

  getNodeCount = getNodeCount;
  getBlockHeight = getBlockHeight;
  getMerkleProof = getMerkleProof;
  getStorage = getStorage;
  getAllowance = getAllowance;
  getBlock = getBlock;
  getTransaction = getTransaction;
  getNetworks = getNetworks;
  getBalance = getBalance;
  getUnboundOng = getUnboundOng;
  getContract = getContract;
  getSmartCodeEvent = getSmartCodeEvent;
  getBlockHeightByTxHash = getBlockHeightByTxHash;
  getBlockHash = getBlockHash;
  getBlockTxsByHeight = getBlockTxsByHeight;
  getGasPrice = getGasPrice;
  getGrantOng = getGrantOng;
  getMempoolTxCount = getMempoolTxCount;
  getMempoolTxState = getMempoolTxState;
  getVersion = getVersion;

  getProvider = getProvider;

  invoke = invoke;
  invokeRead = invokeRead;
  deploy = deploy;

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
