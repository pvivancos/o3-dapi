import {
  Crypto,
  utils,
} from 'ontology-ts-sdk';
const {
  PublicKey,
  Signature,
} = Crypto;

import { ErrorMsg } from '../../constants';
import { parseError } from '../../utils';

interface VerifyMessageInput {
  message: string;
  publicKey: string;
  data: string;
}

export function verifyMessage({ message, publicKey, data }: VerifyMessageInput): Promise<boolean> {
  return new Promise((resolve, reject) => {
    try {
      const messageHex = utils.str2hexstr(message);
      const sig = Signature.deserializeHex(data);
      const publicKeyInstance = new PublicKey(publicKey);
      const result = publicKeyInstance.verify(messageHex, sig);

      resolve(result);
    } catch (err) {
      reject({
        type: ErrorMsg.UNKNOWN_ERROR,
        description: parseError(err),
      });
    }
  });
}
