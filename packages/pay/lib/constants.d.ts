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
    ethereum = "ethereum",
    bitcoin = "bitcoin",
    neo = "neo",
    ontology = "ontology"
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