import send, { SendInputArgs, SendSuccessOutput } from './modules/send';
declare class O3dapiPay {
    static blockchain: string;
    assets: {
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
    send: typeof send;
    constructor(sendMessageMethod: any);
}
export default O3dapiPay;
export declare type send = (args: SendInputArgs) => Promise<SendSuccessOutput>;
//# sourceMappingURL=index.d.ts.map