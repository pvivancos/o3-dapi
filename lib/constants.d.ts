export declare const PLATFORM = "web3neo";
export declare const VERSION = "v1";
export declare enum ArgumentDataType {
    STRING = "String",
    BOOLEAN = "Boolean",
    HASH160 = "Hash160",
    INTEGER = "Integer",
    BYTEARRAY = "ByteArray",
    ARRAY = "Array"
}
export declare enum Network {
    MainNet = "MainNet",
    TestNet = "TestNet",
    PrivateNet = "PrivateNet"
}
export declare enum Command {
    isReady = "isReady",
    getProvider = "getProvider",
    getNetwork = "getNetwork",
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