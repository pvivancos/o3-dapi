import { sendMessage } from '../../messaging';
import { INVOKE_READ } from '../../constants/commands';

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
    data,
  });
}
