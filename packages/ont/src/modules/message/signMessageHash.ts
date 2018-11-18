import { sendMessage } from '../../messaging';
import { Command } from '../../constants';
import { Signature } from './common';

interface SignMessageHashInput {
  messageHash: string;
}

export function signMessageHash(data: SignMessageHashInput): Promise<Signature> {
  return sendMessage({
    command: Command.getIdentity,
    data,
  });
}
