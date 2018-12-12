import { getProvider } from './modules/read/getProvider';
import { getNetworks } from './modules/read/getNetworks';
import { getAccount } from './modules/read/getAccount';
import { getBalance } from './modules/read/getBalance';
import { getStorage } from './modules/read/getStorage';
import { invokeRead } from './modules/read/invokeRead';
import { send } from './modules/write/send';
import { invoke } from './modules/write/invoke';
import { disconnect } from './modules/disconnect';
import { addEventListener, removeEventListener } from './modules/eventListener';
import { ArgumentDataType, EventName, BLOCKCHAIN } from './constants';
import { initMessaging } from './messaging';

class O3dapiNeo {

  static blockchain = BLOCKCHAIN;

  isAvailable = Boolean((window as any)._o3dapi.isAvailable);

  getProvider = getProvider;
  getNetworks = getNetworks;
  getAccount = getAccount;
  getBalance = getBalance;
  getStorage = getStorage;
  invokeRead = invokeRead;

  send = send;
  invoke = invoke;

  addEventListener = addEventListener;
  removeEventListener = removeEventListener;

  disconnect = disconnect;

  Constants = {
    EventName,
    ArgumentDataType,
  };

  constructor(sendMessageMethod, addEventListenerMethod) {
    initMessaging(sendMessageMethod, addEventListenerMethod);
  }
}

export default O3dapiNeo;
