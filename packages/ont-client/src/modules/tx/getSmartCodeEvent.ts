import {
  RestClient,
} from 'ontology-ts-sdk';
import { ErrorMsg, Network } from '../../constants';
import { parseError, getNetworkUrl } from '../../utils';

interface GetSmartCodeEventInput {
  value: string | number;
  network: Network;
}

export function getSmartCodeEvent({
  network,
  value,
}: GetSmartCodeEventInput): Promise<any> {
  return new Promise((resolve, reject) => {
    try {
      const url = getNetworkUrl(network);

      new RestClient(url).getSmartCodeEvent(Number.isNaN(Number(value)) ? value : Number(value))
      .then(res => res.Result)
      .then(resolve)
      .catch(err => {
        reject({
          type: ErrorMsg.UNKNOWN_ERROR,
          description: parseError(err),
        });
      });
    } catch (err) {
      reject({
        type: ErrorMsg.UNKNOWN_ERROR,
        description: parseError(err),
      });
    }
  });
}
