export declare const BLOCKCHAIN = "NEO";
export declare const VERSION = "v1";
export declare enum ArgumentDataType {
    STRING = "String",
    BOOLEAN = "Boolean",
    HASH160 = "Hash160",
    INTEGER = "Integer",
    BYTEARRAY = "ByteArray",
    ARRAY = "Array"
}
export declare const DefaultNetwork = "MainNet";
export declare enum Command {
    isReady = "isReady",
    getProvider = "getProvider",
    getNetworks = "getNetworks",
    getAccount = "getAccount",
    getBalance = "getBalance",
    getStorage = "getStorage",
    invokeRead = "invokeRead",
    send = "send",
    invoke = "invoke",
    event = "event"
}
export declare enum EventName {
    READY = "READY",
    ACCOUNT_CHANGED = "ACCOUNT_CHANGED"
}
//# sourceMappingURL=constants.d.ts.map