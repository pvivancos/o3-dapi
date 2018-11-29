import { Signature } from './common';
interface VerifyMessageHashInput {
    message: string;
    signature: Signature;
}
export declare function verifyMessageHash(data: VerifyMessageHashInput): Promise<boolean>;
export {};
//# sourceMappingURL=verifyMessageHash.d.ts.map