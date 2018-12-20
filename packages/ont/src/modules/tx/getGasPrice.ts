import { sendMessage } from '../../messaging';
import { Command } from '../../constants';

interface GetGasPriceInput {
  network: string;
}

interface GasPrice {
  gasPrice: number;
  height: number;
}

export function getGasPrice(data: GetGasPriceInput): Promise<GasPrice> {
  return sendMessage({
    command: Command.getGasPrice,
    data,
  });
}
