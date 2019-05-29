import { initMessaging } from './messaging';
import send, { SendInputArgs, SendSuccessOutput } from './modules/send';
import { BLOCKCHAIN, ASSETS } from './constants';

class O3dapiPay {

  static blockchain = BLOCKCHAIN;
  assets = ASSETS;

  send = send;

  constructor(sendMessageMethod) {
    initMessaging(sendMessageMethod);
  }
}

export default O3dapiPay;
export type send = (args: SendInputArgs) => Promise<SendSuccessOutput>;
