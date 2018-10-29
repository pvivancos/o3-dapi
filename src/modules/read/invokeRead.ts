import { sendMessage } from '../../messaging';
import { ArgumentDataType, Command } from '../../constants';

interface InvokeReadArgs {
  scriptHash: string;
  operation: string;
  args: Argument[];
}

interface Argument {
  type: ArgumentDataType;
  value: any;
}

export function invokeRead(data: InvokeReadArgs, network?: string): Promise<any> {
  return sendMessage({
    command: Command.invokeRead,
    data,
    network,
  });
}
