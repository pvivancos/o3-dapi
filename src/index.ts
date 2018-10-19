import { isReady } from './modules/read/isReady';
import { getProvider } from './modules/read/getProvider';
import { getNetwork, Network } from './modules/read/getNetwork';
import { getAccount } from './modules/read/getAccount';
import { getBalance } from './modules/read/getBalance';
import { getStorage } from './modules/read/getStorage';
import { invokeRead } from './modules/read/invokeRead';
import { send } from './modules/write/send';
import { invoke } from './modules/write/invoke';
import { addEventListener, removeEventListener, EventName } from './modules/eventListener';
import { ArgumentDataType } from './constants/common';

export default {
  isReady,
  getProvider,
  getNetwork,
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
