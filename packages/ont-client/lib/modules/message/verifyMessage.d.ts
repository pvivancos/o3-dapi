interface VerifyMessageInput {
    message: string;
    publicKey: string;
    data: string;
}
export declare function verifyMessage({ message, publicKey, data }: VerifyMessageInput): Promise<boolean>;
export {};
//# sourceMappingURL=verifyMessage.d.ts.map