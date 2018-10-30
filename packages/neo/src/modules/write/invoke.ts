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

interface InvokeOutput {
  txid: string;
  nodeUrl: string;
}

export function invoke(data: InvokeArgs): Promise<InvokeOutput> {
  return sendMessage({
    command: Command.invoke,
    data,
  });
}
