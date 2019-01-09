import { sendMessage } from '../../messaging';
import { Command } from '../../constants';

interface GetContractInput {
  hash: string;
  network: string;
}

interface Contract {
  Code: string;
  NeedStorage: boolean;
  Name: string;
  CodeVersion: string;
  Author: string;
  Email: string;
  Description: string;
}

export function getContract(data: GetContractInput): Promise<Contract> {
  return sendMessage({
    command: Command.getContract,
    data,
  });
}
