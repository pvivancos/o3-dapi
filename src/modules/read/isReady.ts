import { sendMessage } from '../../messaging';
import { IS_READY } from '../../constants/commands';

export function isReady(): Promise<boolean> {
  return sendMessage({
    command: IS_READY,
  });
}
