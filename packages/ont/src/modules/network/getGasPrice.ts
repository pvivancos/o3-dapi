import { sendMessage } from '../../messaging';
import { Command } from '../../constants';

interface GasPrice {
  gasPrice: number;
  height: number;
}

export function getGasPrice(): Promise<GasPrice> {
  return sendMessage({
    command: Command.getGasPrice,
  });
}
