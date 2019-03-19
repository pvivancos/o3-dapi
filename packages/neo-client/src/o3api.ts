import { HOST, CLOUD_HOST, Network } from './constants';

export interface UTXO {
  asset: string;
  index: number;
  txid: string;
  value: string;
  createdAtBlock: number;
}

interface Token {
  logoURL: string;
  logoURLDark: string;
  logoSVG: string;
  webURL: string;
  tokenHash: string;
  name: string;
  symbol: string;
  decimal: number;
  totalSupply: number;
  price: string;
}

export interface AddressBalances {
  address: string;
  assets: AssetBalance[];
  nep5Tokens: AssetBalance[];
  scriptHash: string;
  version: number;
}

interface AssetBalance {
  id: string;
  name: string;
  symbol: string;
  decimals: number;
  value: string;
}

export function fillUrl(network: Network): Promise<string> {
  let url = `${HOST}/v1/nodes`;

  if (network === Network.TestNet) {
    url += '?network=test';
  }

  return fetch(url)
  .then(res => res.json())
  .then(res => {
    const best = res.result.data.neo.best;
    return best.startsWith('https') ? best : res.result.data.neo.nodes.filter(node => node.startsWith('https'))[0];
  });
}

export function fetchAddressBalances(network: Network, address: string): Promise<AddressBalances> {
  let url = `${HOST}/v1/neo/${address}/balances`;
  if (network === Network.TestNet) {
    url += '?network=test';
  }

  return fetch(url)
  .then(res => res.json())
  .then(res => res.result.data);
}

export function fetchUTXO(network: Network, address: string): Promise<UTXO[]> {
  let url = `${HOST}/v1/neo/${address}/utxo`;
  if (network === Network.TestNet) {
    url += '?network=test';
  }

  return fetch(url)
  .then(res => res.json())
  .then(res => res.result.data);
}

export function fetchNEP5Tokens(network: Network): Promise<Token[]> {
  let url = `${CLOUD_HOST}/v1/neo/nep5`;
  if (network === Network.TestNet) {
    url += '?network=test';
  }

  return fetch(url)
  .then(res => res.json())
  .then(res => res.result.data.nep5tokens);
}
