import { initMessaging } from './messaging';
import connect from './modules/connect';

class O3dapiCoinbase {

  connect = connect;

  constructor(sendMessageMethod) {
    initMessaging(sendMessageMethod);
  }
}

export default O3dapiCoinbase;
export type connect = () => Promise<void>;
