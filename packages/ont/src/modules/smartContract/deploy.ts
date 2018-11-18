import { sendMessage } from '../../messaging';
import { Command } from '../../constants';
import { Parameter } from './common';

interface DeployInput {
  code: string;
  name?: string;
  version?: string;
  author?: string;
  email?: string;
  description?: string;
  needStorage?: boolean;
  gasPrice?: number;
  gasLimit?: number;
}

export function deploy(data: DeployInput): Promise<void> {
  return sendMessage({
    command: Command.deploy,
    data,
  });
}
