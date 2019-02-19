interface VerifyMessageInput {
    message: string;
    publicKey: string;
    data: string;
}
export declare function verifyMessage(data: VerifyMessageInput): Promise<boolean>;
export {};
//# sourceMappingURL=verifyMessage.d.ts.map