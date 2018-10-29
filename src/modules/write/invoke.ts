import { sendMessage } from '../../messaging';
import { ArgumentDataType, Command } from '../../constants';

interface InvokeArgs {
  scriptHash: string;
  operation: string;
  args: Argument[];
  assets?: AttachedAssets;
  fee?: string;
  network?: string;
}

interface Argument {
  type: ArgumentDataType;
  value: any;
}

interface AttachedAssets {
  [asset: string]: string;
}

export function invoke(data: InvokeArgs): Promise<string> {
  return sendMessage({
    command: Command.invoke,
    data,
  });
}
