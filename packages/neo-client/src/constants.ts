export enum ErrorMsg {
  NO_PROVIDER = 'NO_PROVIDER',
  RPC_ERROR = 'RPC_ERROR',
  MALFORMED_INPUT = 'MALFORMED_INPUT',
  CANCELED = 'CANCELED',
  INSUFFICIENT_FUNDS = 'INSUFFICIENT_FUNDS',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
  INVALID_NETWORK = 'INVALID_NETWORK',
}

export enum Network {
  MainNet = 'MainNet',
  TestNet = 'TestNet',
}

export const HOST = 'https://platform.o3.network/api';
export const CLOUD_HOST = 'https://api.o3.network';

export enum ArgumentDataType {
  STRING = 'String',
  BOOLEAN = 'Boolean',
  HASH160 = 'Hash160',
  HASH256 = 'Hash256',
  INTEGER = 'Integer',
  BYTEARRAY = 'ByteArray',
  ARRAY = 'Array',
  ADDRESS = 'Address',
}
