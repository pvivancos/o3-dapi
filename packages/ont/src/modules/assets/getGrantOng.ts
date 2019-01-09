import { sendMessage } from '../../messaging';
import { Command } from '../../constants';

interface GetGrantOngInput {
  address: string;
  network: string;
}

export function getGrantOng(data: GetGrantOngInput): Promise<string> {
  return sendMessage({
    command: Command.getGrantOng,
    data,
  });
}
