import { sendMessage } from '../../messaging';
import { Command } from '../../constants';
import { Signature } from './common';

interface SignMessageInput {
  message: string;
}

export function signMessage(data: SignMessageInput): Promise<Signature> {
  return sendMessage({
    command: Command.signMessage,
    data,
  });
}
