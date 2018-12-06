import * as assets from './modules/assets';
import * as identity from './modules/identity';
import * as message from './modules/message';
import * as sc from './modules/sc';
import * as tx from './modules/tx';
import * as network from './modules/network';
import * as stake from './modules/stake';
import { getProvider } from './modules/getProvider';
import { getAccount } from './modules/getAccount';
import { getNetworks } from './modules/getNetworks';
import { ParameterType } from './modules/sc/common';
import { addEventListener, removeEventListener } from './modules/eventListener';
import { EventName } from './constants';
declare class O3dapiOnt {
    static blockchain: string;
    isAvailable: boolean;
    getProvider: typeof getProvider;
    getNetworks: typeof getNetworks;
    getAccount: typeof getAccount;
    identity: {
        getIdentity: typeof identity.getIdentity;
        getDDO: typeof identity.getDDO;
        addAttributes: typeof identity.addAttributes;
        removeAttribute: typeof identity.removeAttribute;
    };
    message: {
        signMessage: typeof message.signMessage;
        verifyMessage: typeof message.verifyMessage;
    };
    network: {
        getNodeCount: typeof network.getNodeCount;
        getBlockHeight: typeof network.getBlockHeight;
        getMerkleProof: typeof network.getMerkleProof;
        getBlock: typeof network.getBlock;
        getBlockHash: typeof network.getBlockHash;
        getVersion: typeof network.getVersion;
    };
    tx: {
        getBlockHeightByTxHash: typeof tx.getBlockHeightByTxHash;
        getMempoolTxCount: typeof tx.getMempoolTxCount;
        getMempoolTxState: typeof tx.getMempoolTxState;
        getSmartCodeEvent: typeof tx.getSmartCodeEvent;
        getGasPrice: typeof tx.getGasPrice;
        getBlockTxsByHeight: typeof tx.getBlockTxsByHeight;
        getTransaction: typeof tx.getTransaction;
    };
    assets: {
        getAllowance: typeof assets.getAllowance;
        getBalance: typeof assets.getBalance;
        getGrantOng: typeof assets.getGrantOng;
        getUnboundOng: typeof assets.getUnboundOng;
        send: typeof assets.send;
    };
    sc: {
        getContract: typeof sc.getContract;
        getStorage: typeof sc.getStorage;
        invoke: typeof sc.invoke;
        invokeRead: typeof sc.invokeRead;
        deploy: typeof sc.deploy;
    };
    stake: {
        getStakeRoundInfo: typeof stake.getStakeRoundInfo;
        getNodeList: typeof stake.getNodeList;
        getTotalStake: typeof stake.getTotalStake;
        getNodeStakeInfo: typeof stake.getNodeStakeInfo;
        getStakedClaimableOng: typeof stake.getStakedClaimableOng;
        getStakedClaimableOngRewards: typeof stake.getStakedClaimableOngRewards;
        addStake: typeof stake.addStake;
        requestStakeWithdraw: typeof stake.requestStakeWithdraw;
        withdrawStake: typeof stake.withdrawStake;
        claimStakedOng: typeof stake.claimStakedOng;
        claimStakedOngRewards: typeof stake.claimStakedOngRewards;
    };
    addEventListener: typeof addEventListener;
    removeEventListener: typeof removeEventListener;
    Constants: {
        EventName: typeof EventName;
        ParameterType: typeof ParameterType;
    };
    constructor(sendMessageMethod: any, addEventListenerMethod: any);
}
export default O3dapiOnt;
//# sourceMappingURL=index.d.ts.map