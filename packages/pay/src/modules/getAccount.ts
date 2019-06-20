import { sendMessage } from '../messaging';
import { Command, Asset } from '../constants';

export interface GetAccountSuccessOutput {
  address: string;
  tag?: string; // if the blockchain requires a tag in addition to address this will be populated
}

export default function getAccount({asset}: {asset: Asset}): Promise<GetAccountSuccessOutput> {
  return sendMessage({
    command: Command.getAccount,
    data: asset,
  });
}
