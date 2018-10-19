import { sendMessage } from '../../messaging';
import { GET_NETWORK } from '../../constants/commands';

export enum Network {
  MainNet = 'MainNet',
  TestNet = 'TestNet',
  PrivateNet = 'PrivateNet',
}

export function getNetwork(): Promise<Network> {
  return sendMessage({
    command: GET_NETWORK,
  });
}
