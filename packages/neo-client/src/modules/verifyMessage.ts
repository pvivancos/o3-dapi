import { wallet, u } from '@cityofzion/neon-js';
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
      const parameterHexString = u.str2hexstring(message);
      const lengthHex = u.num2VarInt(parameterHexString.length / 2);
      const concatenatedString = lengthHex + parameterHexString;
      const messageHex = '010001f0' + concatenatedString + '0000';
      const result = wallet.verifyMessage(u.hexstring2str(messageHex), data, publicKey);

      resolve({ result });
    } catch (err) {
      reject({
        type: ErrorMsg.UNKNOWN_ERROR,
        description: parseError(err),
      });
    }
  });
}
