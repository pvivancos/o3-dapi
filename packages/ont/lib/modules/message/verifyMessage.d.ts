import { Signature } from './common';
interface VerifyMessageInput {
    message: string;
    signature: Signature;
}
export declare function verifyMessage(data: VerifyMessageInput): Promise<boolean>;
export {};
//# sourceMappingURL=verifyMessage.d.ts.map