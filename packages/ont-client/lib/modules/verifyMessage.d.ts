export interface VerifyMessageInput {
    message: string;
    publicKey: string;
    data: string;
}
export interface VerifyMessageOutput {
    result: boolean;
}
export default function verifyMessage({ message, publicKey, data, }: VerifyMessageInput): Promise<VerifyMessageOutput>;
//# sourceMappingURL=verifyMessage.d.ts.map