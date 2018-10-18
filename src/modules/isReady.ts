import { sendMessage } from '../messaging';
import { MSG_COMMANDS } from '../constants';
const { IS_READY } = MSG_COMMANDS;

export function isReady(): Promise<boolean> {
  return sendMessage({
    command: IS_READY,
  });
}
