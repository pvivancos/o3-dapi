export declare const BLOCKCHAIN = "ONT";
export declare const VERSION = "0.0.1";
export declare enum Command {
    getAccount = "getAccount",
    getPublicKey = "getPublicKey",
    send = "send",
    getIdentity = "getIdentity",
    getDDO = "getDDO",
    addAttributes = "addAttributes",
    removeAttribute = "removeAttribute",
    signMessageHash = "signMessageHash",
    verifyMessageHash = "verifyMessageHash",
    signMessage = "signMessage",
    verifyMessage = "verifyMessage",
    getNodeCount = "getNodeCount",
    getBlockHeight = "getBlockHeight",
    getMerkleProof = "getMerkleProof",
    getStorage = "getStorage",
    getAllowance = "getAllowance",
    getBlock = "getBlock",
    getTransaction = "getTransaction",
    getNetwork = "getNetwork",
    getBalance = "getBalance",
    getUnboundOng = "getUnboundOng",
    getContract = "getContract",
    getSmartCodeEvent = "getSmartCodeEvent",
    getBlockHeightByTxHash = "getBlockHeightByTxHash",
    getBlockHash = "getBlockHash",
    getBlockTxsByHeight = "getBlockTxsByHeight",
    getGasPrice = "getGasPrice",
    getGrantOng = "getGrantOng",
    getMempoolTxCount = "getMempoolTxCount",
    getMempoolTxState = "getMempoolTxState",
    getVersion = "getVersion",
    getProvider = "getProvider",
    invoke = "invoke",
    invokeRead = "invokeRead",
    deploy = "deploy"
}
export declare enum EventName {
    READY = "READY"
}
export declare type Asset = 'ONT' | 'ONG' | string;
//# sourceMappingURL=constants.d.ts.map