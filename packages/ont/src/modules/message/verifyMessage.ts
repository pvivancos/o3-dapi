import { sendMessage } from '../../messaging';
import { Command } from '../../constants';
import { Signature } from './common';

interface VerifyMessageInput {
  message: string;
  signature: Signature;
}

export function verifyMessage(data: VerifyMessageInput): Promise<boolean> {
  return sendMessage({
    command: Command.getIdentity,
    data,
  });
}
