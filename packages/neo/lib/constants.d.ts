export declare const BLOCKCHAIN = "NEO";
export declare const VERSION = "v1";
export declare enum ArgumentDataType {
    STRING = "String",
    BOOLEAN = "Boolean",
    HASH160 = "Hash160",
    HASH256 = "Hash256",
    INTEGER = "Integer",
    BYTEARRAY = "ByteArray",
    ARRAY = "Array",
    ADDRESS = "Address"
}
export declare enum Command {
    isReady = "isReady",
    getProvider = "getProvider",
    getNetworks = "getNetworks",
    getAccount = "getAccount",
    getPublicKey = "getPublicKey",
    getBalance = "getBalance",
    getStorage = "getStorage",
    invokeRead = "invokeRead",
    send = "send",
    invoke = "invoke",
    event = "event",
    disconnect = "disconnect",
    signMessage = "signMessage",
    verifyMessage = "verifyMessage",
    deploy = "deploy"
}
export declare enum EventName {
    READY = "READY",
    ACCOUNT_CHANGED = "ACCOUNT_CHANGED",
    CONNECTED = "CONNECTED",
    DISCONNECTED = "DISCONNECTED",
    NETWORK_CHANGED = "NETWORK_CHANGED"
}
//# sourceMappingURL=constants.d.ts.map