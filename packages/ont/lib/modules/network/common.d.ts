export declare enum TransactionType {
    BookKeeper = 2,
    Claim = 3,
    Deploy = 208,
    Invoke = 209,
    Enrollment = 4,
    Vote = 5
}
export interface TxSignature {
    PubKeys: string[];
    M: number;
    SigData: string[];
}
export interface Transaction {
    Version: number;
    Nonce: number;
    GasPrice: number;
    GasLimit: number;
    Payer: string;
    TxType: TransactionType;
    Payload: any;
    Attributes: any[];
    Sigs: TxSignature[];
    Hash: string;
    Height: number;
}
//# sourceMappingURL=common.d.ts.map