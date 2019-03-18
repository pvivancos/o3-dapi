export enum ErrorMsg {
  NO_PROVIDER = 'NO_PROVIDER',
  RPC_ERROR = 'RPC_ERROR',
  MALFORMED_INPUT = 'MALFORMED_INPUT',
  CANCELED = 'CANCELED',
  INSUFFICIENT_FUNDS = 'INSUFFICIENT_FUNDS',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
  INVALID_NETWORK = 'INVALID_NETWORK',
}

export type Asset = 'ONT' | 'ONG' | string;

export enum Network {
  MainNet = 'MainNet',
  TestNet = 'TestNet',
}

export enum TransactionType {
  BookKeeper = 2,
  Claim = 3,
  Deploy = 208,
  Invoke = 209,
  Enrollment = 4,
  Vote = 5,
}

export interface TxSignature {
  PubKeys: string[];
  M: number;
  SigData: string[];
}

export interface Transaction {
  Version: number;
  Nonce: number;
  GasPrice: number;
  GasLimit: number;
  Payer: string;
  TxType: TransactionType;
  Payload: any;
  Attributes: any[];
  Sigs: TxSignature[];
  Hash: string;
  Height: number;
}
