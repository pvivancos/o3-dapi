import * as assets from './modules/assets';
import * as message from './modules/message';
import * as sc from './modules/sc';
import * as stake from './modules/stake';
import * as oep4 from './modules/oep4';
import { getProvider } from './modules/getProvider';
import { getAccount, getPublicKey } from './modules/account';
import { getNetworks } from './modules/getNetworks';
import { disconnect } from './modules/disconnect';
import { ParameterType } from './modules/sc/common';
import { addEventListener, removeEventListener } from './modules/eventListener';
import { EventName } from './constants';
declare class O3dapiOnt {
    static blockchain: string;
    isAvailable: boolean;
    getProvider: typeof getProvider;
    getNetworks: typeof getNetworks;
    getAccount: typeof getAccount;
    getPublicKey: typeof getPublicKey;
    disconnect: typeof disconnect;
    message: {
        verifyMessage: (data: any) => any;
        signMessage: typeof message.signMessage;
    };
    network: {
        getNodeCount: (data: any) => any;
        getBlockHeight: (data: any) => any;
        getMerkleProof: (data: any) => any;
        getBlock: (data: any) => any;
        getBlockHash: (data: any) => any;
        getVersion: (data: any) => any;
    };
    tx: {
        getBlockHeightByTxHash: (data: any) => any;
        getMempoolTxCount: (data: any) => any;
        getMempoolTxState: (data: any) => any;
        getSmartCodeEvent: (data: any) => any;
        getGasPrice: (data: any) => any;
        getBlockTxsByHeight: (data: any) => any;
        getTransaction: (data: any) => any;
    };
    assets: {
        getAllowance: (data: any) => any;
        getBalance: (data: any) => any;
        getGrantOng: (data: any) => any;
        getUnboundOng: (data: any) => any;
        send: typeof assets.send;
    };
    sc: {
        getContract: (data: any) => any;
        getStorage: (data: any) => any;
        invokeRead: (data: any) => any;
        invoke: typeof sc.invoke;
        deploy: typeof sc.deploy;
    };
    stake: {
        getStakeRoundInfo: (data: any) => any;
        getNodeList: (data: any) => any;
        getTotalStake: (data: any) => any;
        getNodeStakeInfo: (data: any) => any;
        getStakedClaimableOng: (data: any) => any;
        getStakedClaimableOngRewards: (data: any) => any;
        addStake: typeof stake.addStake;
        requestStakeWithdraw: typeof stake.requestStakeWithdraw;
        withdrawStake: typeof stake.withdrawStake;
        claimStakedOng: typeof stake.claimStakedOng;
        claimStakedOngRewards: typeof stake.claimStakedOngRewards;
    };
    oep4: {
        getAllowance: (data: any) => any;
        getBalanceOf: (data: any) => any;
        getTotalSupply: (data: any) => any;
        getSymbol: (data: any) => any;
        getDecimals: (data: any) => any;
        getName: (data: any) => any;
        getTokenDetails: (data: any) => any;
        init: typeof oep4.init;
        transfer: typeof oep4.transfer;
        transferMulti: typeof oep4.transferMulti;
        approve: typeof oep4.approve;
        transferFrom: typeof oep4.transferFrom;
    };
    addEventListener: typeof addEventListener;
    removeEventListener: typeof removeEventListener;
    Constants: {
        EventName: typeof EventName;
        ParameterType: typeof ParameterType;
    };
    private clientPlugin;
    constructor(sendMessageMethod: any, addEventListenerMethod: any);
    setClientPlugin(plugin: any): void;
}
export default O3dapiOnt;
//# sourceMappingURL=index.d.ts.map