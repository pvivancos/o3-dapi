export const BLOCKCHAIN = 'ONT';
export const VERSION = '0.0.1';

export enum Command {

  // ASSET
  getAccount = 'getAccount',
  getPublicKey = 'getPublicKey',
  send = 'send',

  // IDENTITY
  getIdentity = 'getIdentity',
  getDDO = 'getDDO',
  addAttributes = 'addAttributes',
  removeAttribute = 'removeAttribute',

  // MESSAGE
  signMessageHash = 'signMessageHash',
  verifyMessageHash = 'verifyMessageHash',
  signMessage = 'signMessage',
  verifyMessage = 'verifyMessage',

  // NETWORK
  getNodeCount = 'getNodeCount',
  getBlockHeight = 'getBlockHeight',
  getMerkleProof = 'getMerkleProof',
  getStorage = 'getStorage',
  getAllowance = 'getAllowance',
  getBlock = 'getBlock',
  getTransaction = 'getTransaction',
  getNetwork = 'getNetwork',
  getBalance = 'getBalance',
  getUnboundOng = 'getUnboundOng',
  getContract = 'getContract',
  getSmartCodeEvent = 'getSmartCodeEvent',
  getBlockHeightByTxHash = 'getBlockHeightByTxHash',
  getBlockHash = 'getBlockHash',
  getBlockTxsByHeight = 'getBlockTxsByHeight',
  getGasPrice = 'getGasPrice',
  getGrantOng = 'getGrantOng',
  getMempoolTxCount = 'getMempoolTxCount',
  getMempoolTxState = 'getMempoolTxState',
  getVersion = 'getVersion',

  // PROVIDER
  getProvider = 'getProvider',

  // SMART CONTRACT
  invoke = 'invoke',
  invokeRead = 'invokeRead',
  deploy = 'deploy',

}

export enum EventName {
  READY = 'READY',
}

export type Asset = 'ONT' | 'ONG' | string;
