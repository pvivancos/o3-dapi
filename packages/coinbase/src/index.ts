import { initMessaging } from './messaging';
import connect from './modules/connect';
import { BLOCKCHAIN } from './constants';

class O3dapiCoinbase {

  static blockchain = BLOCKCHAIN;

  connect = connect;

  constructor(sendMessageMethod) {
    initMessaging(sendMessageMethod);
  }
}

export default O3dapiCoinbase;
export type connect = () => Promise<void>;
