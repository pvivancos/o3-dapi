import { sendMessage } from '../messaging';
import { MSG_COMMANDS } from '../constants';
const { GET_NETWORK } = MSG_COMMANDS;

enum Network {
  MainNet = 'MainNet',
  TestNet = 'TestNet',
  PrivateNet = 'PrivateNet',
}

export function getNetwork(): Promise<Network> {
  return sendMessage({
    command: GET_NETWORK,
  });
}
