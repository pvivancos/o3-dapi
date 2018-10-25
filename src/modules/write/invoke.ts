import { sendMessage } from '../../messaging';
import { ArgumentDataType, Network, Command } from '../../constants';

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

export function invoke(data: InvokeArgs, network?: Network): Promise<string> {
  return sendMessage({
    command: Command.invoke,
    data,
    network,
  });
}
