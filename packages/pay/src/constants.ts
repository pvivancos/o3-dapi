export const BLOCKCHAIN = 'PAY';
export const VERSION = 'v1';

export enum Command {
  send = 'send',
}

export interface Asset {
  blockchain: string;
  symbol: string;
  id?: string;
}

export enum Blockchain {
  ethereum = 'Ethereum',
  bitcoin = 'Bitcoin',
  bitcoinCash = 'Bitcoin Cash',
  litecoin = 'Litecoin',
  xrp = 'XRP',
  xlm = 'XLM',
  // neo = 'neo',
  // ontology = 'ontology',
}

export const ASSETS = {
  USDC: {
    blockchain: Blockchain.ethereum,
    symbol: 'USDC',
    id: '0xb9e31a22e3a1c743c6720f3b723923e91f3c0f8b',
  },
  ETH: {
    blockchain: Blockchain.ethereum,
    symbol: 'ETH',
  },
  BTC: {
    blockchain: Blockchain.bitcoin,
    symbol: 'BTC',
  },
  BCH: {
    blockchain: Blockchain.bitcoinCash,
    symbol: 'BCH',
  },
  LTC: {
    blockchain: Blockchain.litecoin,
    symbol: 'LTC',
  },
  XRP: {
    blockchain: Blockchain.xrp,
    symbol: 'XRP',
  },
  XLM: {
    blockchain: Blockchain.xlm,
    symbol: 'XLM',
  },
  // NEO: {
  //   blockchain: Blockchain.neo,
  //   symbol: 'NEO',
  // },
  // GAS: {
  //   blockchain: Blockchain.neo,
  //   symbol: 'GAS',
  // },
  // ONT: {
  //   blockchain: Blockchain.ontology,
  //   symbol: 'ONT',
  // },
  // ONG: {
  //   blockchain: Blockchain.ontology,
  //   symbol: 'ONG',
  // },
};
