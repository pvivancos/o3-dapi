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
declare const _default: {
    isReady: typeof isReady;
    getProvider: typeof getProvider;
    getNetwork: typeof getNetwork;
    getAccount: typeof getAccount;
    getBalance: typeof getBalance;
    getStorage: typeof getStorage;
    invokeRead: typeof invokeRead;
    send: typeof send;
    invoke: typeof invoke;
    addEventListener: typeof addEventListener;
    removeEventListener: typeof removeEventListener;
    CONST: {
        EventName: typeof EventName;
        Network: typeof Network;
        ArgumentDataType: typeof ArgumentDataType;
    };
};
export default _default;
//# sourceMappingURL=index.d.ts.map