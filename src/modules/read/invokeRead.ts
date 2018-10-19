import { sendMessage } from '../../messaging';
import { INVOKE_READ } from '../../constants/commands';
import { ArgumentDataType } from '../../constants/common';

interface InvokeReadArgs {
  scriptHash: string;
  operation: string;
  args: Argument[];
}

interface Argument {
  type: ArgumentDataType;
  value: any;
}

export function invokeRead(data: InvokeReadArgs): Promise<any> {
  return sendMessage({
    command: INVOKE_READ,
    data,
  });
}
