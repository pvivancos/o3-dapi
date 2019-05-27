export declare const BLOCKCHAIN = "PAY";
export declare const VERSION = "v1";
export declare enum Command {
    send = "send"
}
export interface Asset {
    blockchain: string;
    symbol: string;
    id?: string;
}
export declare enum Blockchain {
    ethereum = "Ethereum",
    bitcoin = "Bitcoin",
    bitcoinCash = "Bitcoin Cash",
    litecoin = "Litecoin",
    xrp = "XRP",
    xlm = "XLM"
}
export declare const ASSETS: {
    USDC: {
        blockchain: Blockchain;
        symbol: string;
        id: string;
    };
    ETH: {
        blockchain: Blockchain;
        symbol: string;
    };
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
};
//# sourceMappingURL=constants.d.ts.map