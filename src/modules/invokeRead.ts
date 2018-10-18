import { sendMessage } from '../messaging';
import { MSG_COMMANDS } from '../constants';
const { INVOKE_READ } = MSG_COMMANDS;

interface InvokeReadArgs {
  scriptHash: string;
  operation: string;
  args: Argument[];
}

interface Argument {
  type: ArgumentType;
  value: any;
}

type ArgumentType = `string`|`boolean`|`hash160`|`integer`|`bytearray`|`array`;

export function invokeRead(data: InvokeReadArgs): Promise<any> {
  return sendMessage({
    command: INVOKE_READ,
  });
}
