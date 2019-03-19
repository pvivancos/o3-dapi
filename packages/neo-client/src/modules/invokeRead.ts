import { sc, rpc } from '@cityofzion/neon-js';
const { ContractParam, createScript } = sc;
const { Query } = rpc;
import { ErrorMsg, Network, ArgumentDataType } from '../constants';
import { parseError } from '../utils';
import { fillUrl } from '../o3api';

export interface InvokeReadArgs {
  scriptHash: string;
  operation: string;
  args: Argument[];
  network: Network;
}

interface Argument {
  type: ArgumentDataType;
  value: any;
}

export default function invokeRead({
  scriptHash,
  operation,
  args,
  network,
}: InvokeReadArgs): Promise<any> {
  return new Promise((resolve, reject) => {
    try {

      args = args.map(arg => {
        return arg.type === ArgumentDataType.ADDRESS ?
          (ContractParam.byteArray(arg.value, 'address') as Argument) :
          arg;
      });

      fillUrl(network)
      .then(url => {
        const script = createScript({scriptHash, operation, args});
        const invokeScript = Query.invokeScript(script);
        return invokeScript.execute(url);
      })
      .then(res => {
        resolve({
          result: res && res.result ? res.result : '',
        });
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
