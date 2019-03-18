import {
  TransactionBuilder,
  RestClient,
  ParameterType,
  Parameter,
  Crypto,
  utils,
} from 'ontology-ts-sdk';

const {
  Address,
} = Crypto;

const {
  makeInvokeTransaction,
} = TransactionBuilder;

import { ErrorMsg, Network } from '../../constants';
import { parseError, getNetworkUrl } from '../../utils';

interface InvokeReadInput {
  scriptHash: string;
  operation: string;
  args?: Parameter[];
  network: Network;
}

export function invokeRead({
  scriptHash,
  operation,
  args,
  network,
}: InvokeReadInput): Promise<string> {
  return new Promise((resolve, reject) => {
    try {
      const url = getNetworkUrl(network);

      const parsedArgs = args ? args.map(({type, value}) => {
        return type === ParameterType.Address ?
          new Parameter('', ParameterType.ByteArray, (new Address(value)).serialize()) :
          new Parameter('', (ParameterType as any)[type], value);
      }) : [];

      const parsedContractAddress = new Address(utils.reverseHex(scriptHash));
      const tx = makeInvokeTransaction(operation, parsedArgs, parsedContractAddress);

      new RestClient(url).sendRawTransaction(tx.serialize(), true)
      .then(res => {
        if (res.Error) {
          reject(res.Result);
          return;
        }
        resolve(res.Result);
      })
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
