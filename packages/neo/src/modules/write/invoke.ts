import { sendMessage } from '../../messaging';
import { ArgumentDataType, Command } from '../../constants';

interface InvokeArgs {
  scriptHash: string;
  operation: string;
  args: Argument[];
  fee?: string;
  network?: string;
  attachedAssets?: AttachedAssets[];
  requestedAssets?: RequestedAssets[];
}

interface Argument {
  type: ArgumentDataType;
  value: any;
}

interface AttachedAssets {
  asset: string;
  amount: string;
}

interface RequestedAssets {
  asset: string;
  amount: string;
  utxo: Utxo[];
}

interface Utxo {
  index: number;
  txid: string;
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
