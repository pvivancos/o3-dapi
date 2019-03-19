import { wallet } from '@cityofzion/neon-js';
import { ErrorMsg } from '../constants';
import { parseError } from '../utils';

export interface VerifyMessageInput {
  message: string;
  publicKey: string;
  data: string;
}

export interface VerifyMessageOutput {
  result: boolean;
}

export default function verifyMessage({
  message,
  publicKey,
  data,
}: VerifyMessageInput): Promise<VerifyMessageOutput> {
  return new Promise((resolve, reject) => {
    try {
      resolve({
        result: wallet.verifyMessage(message, data, publicKey),
      });
    } catch (err) {
      reject({
        type: ErrorMsg.UNKNOWN_ERROR,
        description: parseError(err),
      });
    }
  });
}
