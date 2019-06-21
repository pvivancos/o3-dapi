import { initMessaging } from './messaging';
import send, { SendInputArgs, SendSuccessOutput } from './modules/send';
import getAccount, { GetAccountSuccessOutput, GetAccountArgs } from './modules/getAccount';
import { BLOCKCHAIN, ASSETS, Asset } from './constants';

class O3dapiPay {

  static blockchain = BLOCKCHAIN;
  assets = ASSETS;

  send = send;
  getAccount = getAccount;

  constructor(sendMessageMethod) {
    initMessaging(sendMessageMethod);
  }
}

export default O3dapiPay;
export type send = (args: SendInputArgs) => Promise<SendSuccessOutput>;
export type getAccount = (args: GetAccountArgs) => Promise<GetAccountSuccessOutput>;
