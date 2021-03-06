import send, { SendInputArgs, SendSuccessOutput } from './modules/send';
import getAccount, { GetAccountSuccessOutput, GetAccountArgs } from './modules/getAccount';
declare class O3dapiPay {
    static blockchain: string;
    assets: {
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
    send: typeof send;
    getAccount: typeof getAccount;
    constructor(sendMessageMethod: any);
}
export default O3dapiPay;
export declare type send = (args: SendInputArgs) => Promise<SendSuccessOutput>;
export declare type getAccount = (args: GetAccountArgs) => Promise<GetAccountSuccessOutput>;
//# sourceMappingURL=index.d.ts.map