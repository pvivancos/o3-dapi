import { sendMessage } from '../../messaging';
import { INVOKE } from '../../constants/commands';

interface InvokeArgs {
  scriptHash: string; // script hash of the smart contract to invoke
  operation: string; // operation on the smart contract to call
  args: Argument[]; // any input arguments for the operation
  assets?: AttachedAssets;
  fee?: string; // (Optional) The parsed amount of network fee (in GAS) to include with transaction
}

interface Argument {
  type: ArgumentType;
  value: any;
}

type ArgumentType = `string`|`boolean`|`hash160`|`integer`|`bytearray`|`array`;

interface AttachedAssets {
  [asset: string]: string,
}

export function send(data: InvokeArgs): Promise<string> {
  return sendMessage({
    command: INVOKE,
    data,
  });
}
