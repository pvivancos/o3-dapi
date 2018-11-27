import { sendMessage } from '../../messaging';
import { Command } from '../../constants';

interface GetVersionArgs {
  network?: string;
}

export function getVersion(data: GetVersionArgs): Promise<string> {
  return sendMessage({
    command: Command.getVersion,
    data,
  });
}
