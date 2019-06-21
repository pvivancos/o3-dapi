export const BLOCKCHAIN = 'PAY';
export const VERSION = 'v1';

export enum Command {
  send = 'send',
  getAccount = 'getAccount',
}

export interface Asset {
  blockchain: string;
  symbol: string;
}

export enum Blockchain {
  ethereum = 'Ethereum',
  bitcoin = 'Bitcoin',
  bitcoinCash = 'Bitcoin Cash',
  litecoin = 'Litecoin',
  ripple = 'ripple',
  stellar = 'stellar',
  // neo = 'neo',
  // ontology = 'ontology',
  zcash = 'zcash',
  eosio = 'eosio',
  ethereumClassic = 'ethereum_classic',
}

export const ASSETS = {
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
    blockchain: Blockchain.ripple,
    symbol: 'XRP',
  },
  XLM: {
    blockchain: Blockchain.stellar,
    symbol: 'XLM',
  },
  ZEC: {
    blockchain: Blockchain.zcash,
    symbol: 'ZEC',
  },
  EOS: {
    blockchain: Blockchain.eosio,
    symbol: 'EOS',
  },
  ETC: {
    blockchain: Blockchain.ethereumClassic,
    symbol: 'ETC',
  },
  ETH: {
    blockchain: Blockchain.ethereum,
    symbol: 'ETH',
  },
  USDC: {
    blockchain: Blockchain.ethereum,
    symbol: 'USDC',
  },
  DAI: {
    blockchain: Blockchain.ethereum,
    symbol: 'DAI',
  },
  ZRX: {
    blockchain: Blockchain.ethereum,
    symbol: 'ZRX',
  },
  BAT: {
    blockchain: Blockchain.ethereum,
    symbol: 'BAT',
  },
  REP: {
    blockchain: Blockchain.ethereum,
    symbol: 'REP',
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
