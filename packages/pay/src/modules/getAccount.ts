import { sendMessage } from '../messaging';
import { Command, Asset } from '../constants';

export interface GetAccountArgs {
  asset: Asset;
}

export interface GetAccountSuccessOutput {
  address: string;
  tag?: string; // if the blockchain requires a tag in addition to address this will be populated
}

export default function getAccount(data: GetAccountArgs): Promise<GetAccountSuccessOutput> {
  return sendMessage({
    command: Command.getAccount,
    data,
  });
}
