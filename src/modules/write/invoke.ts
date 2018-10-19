import { sendMessage } from '../../messaging';
import { INVOKE } from '../../constants/commands';
import { ArgumentDataType } from '../../constants/common';

interface InvokeArgs {
  scriptHash: string;
  operation: string;
  args: Argument[];
  assets?: AttachedAssets;
  fee?: string;
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
    command: INVOKE,
    data,
  });
}
