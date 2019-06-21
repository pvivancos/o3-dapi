export declare const BLOCKCHAIN = "PAY";
export declare const VERSION = "v1";
export declare enum Command {
    send = "send",
    getAccount = "getAccount"
}
export interface Asset {
    blockchain: string;
    symbol: string;
}
export declare enum Blockchain {
    ethereum = "Ethereum",
    bitcoin = "Bitcoin",
    bitcoinCash = "Bitcoin Cash",
    litecoin = "Litecoin",
    ripple = "ripple",
    stellar = "stellar",
    neo = "neo",
    ontology = "ontology",
    zcash = "zcash",
    eosio = "eosio",
    ethereumClassic = "ethereum_classic"
}
export declare const ASSETS: {
    BTC: {
        blockchain: Blockchain;
        symbol: string;
    };
    BCH: {
        blockchain: Blockchain;
        symbol: string;
    };
    LTC: {
        blockchain: Blockchain;
        symbol: string;
    };
    XRP: {
        blockchain: Blockchain;
        symbol: string;
    };
    XLM: {
        blockchain: Blockchain;
        symbol: string;
    };
    ZEC: {
        blockchain: Blockchain;
        symbol: string;
    };
    EOS: {
        blockchain: Blockchain;
        symbol: string;
    };
    ETC: {
        blockchain: Blockchain;
        symbol: string;
    };
    ETH: {
        blockchain: Blockchain;
        symbol: string;
    };
    USDC: {
        blockchain: Blockchain;
        symbol: string;
    };
    DAI: {
        blockchain: Blockchain;
        symbol: string;
    };
    ZRX: {
        blockchain: Blockchain;
        symbol: string;
    };
    BAT: {
        blockchain: Blockchain;
        symbol: string;
    };
    REP: {
        blockchain: Blockchain;
        symbol: string;
    };
    NEO: {
        blockchain: Blockchain;
        symbol: string;
    };
    GAS: {
        blockchain: Blockchain;
        symbol: string;
    };
    ONT: {
        blockchain: Blockchain;
        symbol: string;
    };
    ONG: {
        blockchain: Blockchain;
        symbol: string;
    };
};
//# sourceMappingURL=constants.d.ts.map