import { sendMessage } from '../../messaging';
import { Command } from '../../constants';
import { Signature } from './common';

interface VerifyMessageInput {
  message: string;
  publicKey: string;
  data: string;
}

export function verifyMessage(data: VerifyMessageInput): Promise<boolean> {
  return sendMessage({
    command: Command.verifyMessage,
    data,
  });
}
