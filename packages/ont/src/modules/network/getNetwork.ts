import { sendMessage } from '../../messaging';
import { Command } from '../../constants';

type NetworkType = 'MAIN' | 'TEST' | 'PRIVATE';

interface Network {
  type: NetworkType;
  address: string;
}

export function getNetwork(): Promise<Network> {
  return sendMessage({
    command: Command.getNetwork,
  });
}
