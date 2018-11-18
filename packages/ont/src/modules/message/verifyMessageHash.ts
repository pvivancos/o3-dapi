import { sendMessage } from '../../messaging';
import { Command } from '../../constants';
import { Signature } from './common';

interface VerifyMessageHashInput {
  message: string;
  signature: Signature;
}

export function verifyMessageHash(data: VerifyMessageHashInput): Promise<boolean> {
  return sendMessage({
    command: Command.getIdentity,
    data,
  });
}
