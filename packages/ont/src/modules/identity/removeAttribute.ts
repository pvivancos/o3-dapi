import { sendMessage } from '../../messaging';
import { Command } from '../../constants';

interface RemoveAttributeInput {
  key: string;
}

export function removeAttribute(data: RemoveAttributeInput): Promise<void> {
  return sendMessage({
    command: Command.removeAttribute,
    data,
  });
}
