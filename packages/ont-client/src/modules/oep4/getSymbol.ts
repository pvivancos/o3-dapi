import {
  Crypto,
  RestClient,
  utils,
  Oep4,
} from 'ontology-ts-sdk';
const {
  Address,
} = Crypto;
import { ErrorMsg, Network } from '../../constants';
import { parseError, getNetworkUrl } from '../../utils';

interface SymbolInput {
  network: Network;
  scriptHash: string;
}

interface SymbolOutput {
  symbol: string;
}

export function getSymbol({
  network,
  scriptHash,
}: SymbolInput): Promise<SymbolOutput> {
  return new Promise((resolve, reject) => {
    try {
      const url = getNetworkUrl(network);

      const parsedContractAddress = new Address(utils.reverseHex(scriptHash));
      const oep4 = new Oep4.Oep4TxBuilder(parsedContractAddress);
      const tx = oep4.querySymbol();

      new RestClient(url).sendRawTransaction(tx.serialize(), true)
      .then(res => {
        if (res.Error) {
          reject({
            type: ErrorMsg.UNKNOWN_ERROR,
            description: res.Result,
          });
          return;
        }
        resolve({
          symbol: utils.hexstr2str(res.Result.Result),
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
