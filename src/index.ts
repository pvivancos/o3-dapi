import { isReady } from './modules/read/isReady';
import { getProvider } from './modules/read/getProvider';
import { getAccount } from './modules/read/getAccount';
import { getBalance } from './modules/read/getBalance';
import { getStorage } from './modules/read/getStorage';
import { invokeRead } from './modules/read/invokeRead';
import { send } from './modules/write/send';
import { invoke } from './modules/write/invoke';
import { addEventListener, removeEventListener } from './modules/eventListener';
import { ArgumentDataType, EventName, Network } from './constants';

export default {
  isReady,
  getProvider,
  getAccount,
  getBalance,
  getStorage,
  invokeRead,

  send,
  invoke,

  addEventListener,
  removeEventListener,

  CONST: {
    EventName,
    Network,
    ArgumentDataType,
  },
};
