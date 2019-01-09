import { sendMessage } from '../../messaging';
import { Command } from '../../constants';

interface GetSmartCodeEventInput {
  value: string | number;
  network: string;
}

export function getSmartCodeEvent(data: GetSmartCodeEventInput): Promise<any> {
  return sendMessage({
    command: Command.getSmartCodeEvent,
    data,
  });
}
