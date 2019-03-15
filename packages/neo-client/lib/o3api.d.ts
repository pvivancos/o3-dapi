import { Network } from './constants';
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
export declare function fillUrl(network: Network): Promise<string>;
export declare function fetchAddressBalances(network: Network, address: string): Promise<AddressBalances>;
export declare function fetchUTXO(network: Network, address: string): Promise<UTXO[]>;
export declare function fetchNEP5Tokens(network: Network): Promise<Token[]>;
export {};
//# sourceMappingURL=o3api.d.ts.map