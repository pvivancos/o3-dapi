import { sendMessage } from '../../messaging';
import { Command } from '../../constants';

interface GetUnboundOngInput {
  address: string;
}

export function getUnboundOng(data: GetUnboundOngInput): Promise<string> {
  return sendMessage({
    command: Command.getUnboundOng,
    data,
  });
}
