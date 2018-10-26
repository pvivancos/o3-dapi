export const PLATFORM = 'web3neo';
export const VERSION = 'v1';

export enum ArgumentDataType {
  STRING = 'String',
  BOOLEAN = 'Boolean',
  HASH160 = 'Hash160',
  INTEGER = 'Integer',
  BYTEARRAY = 'ByteArray',
  ARRAY = 'Array',
}

export enum Network {
  MainNet = 'MainNet',
  TestNet = 'TestNet',
  PrivateNet = 'PrivateNet',
}

export enum Command {
  isReady = 'isReady',
  getProvider = 'getProvider',
  getNetwork = 'getNetwork',
  getAccount = 'getAccount',
  getBalance = 'getBalance',
  getStorage = 'getStorage',
  invokeRead = 'invokeRead',
  send = 'send',
  invoke = 'invoke',
  event = 'event',
}

export enum EventName {
  READY = 'READY',
  ACCOUNT_CHANGED = 'ACCOUNT_CHANGED',
}
