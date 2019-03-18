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
import { parseError, getNetworkUrl, reverseHex2FixedNumStr } from '../../utils';

interface BalanceOfInput {
  network: Network;
  scriptHash: string;
  address: string;
}

interface BalanceOfOutput {
  amount: string;
}

export function getBalanceOf({
  network,
  scriptHash,
  address,
}: BalanceOfInput): Promise<BalanceOfOutput> {
  return new Promise((resolve, reject) => {
    try {
      const url = getNetworkUrl(network);

      const parsedContractAddress = new Address(utils.reverseHex(scriptHash));
      const oep4 = new Oep4.Oep4TxBuilder(parsedContractAddress);
      const decimalsTx = oep4.queryDecimals();
      const balanceOfTx = oep4.queryBalanceOf(new Address(address));

      Promise.all([
        new RestClient(url).sendRawTransaction(decimalsTx.serialize(), true),
        new RestClient(url).sendRawTransaction(balanceOfTx.serialize(), true),
      ])
      .then(([decimalsRes, balanceRes]) => {
        if (decimalsRes.Error) {
          throw new Error(decimalsRes.Result);
        }
        if (balanceRes.Error) {
          throw new Error(balanceRes.Result);
        }
        const decimals = Number(decimalsRes.Result.Result);
        const amount = reverseHex2FixedNumStr(balanceRes.Result.Result, decimals).toString();

        resolve({
          amount,
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
