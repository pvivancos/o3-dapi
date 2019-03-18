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

interface AllowanceInput {
  network: Network;
  scriptHash: string;
  owner: string;
  spender: string;
}

interface AllowanceOutput {
  amount: string;
}

export function getAllowance({
  network,
  scriptHash,
  owner,
  spender,
}: AllowanceInput): Promise<AllowanceOutput> {
  return new Promise((resolve, reject) => {
    try {
      const url = getNetworkUrl(network);

      const parsedContractAddress = new Address(utils.reverseHex(scriptHash));
      const oep4 = new Oep4.Oep4TxBuilder(parsedContractAddress);
      const decimalsTx = oep4.queryDecimals();
      const allowanceTx = oep4.makeQueryAllowanceTx(
        new Address(owner),
        new Address(spender),
      );

      Promise.all([
        new RestClient(url).sendRawTransaction(decimalsTx.serialize(), true),
        new RestClient(url).sendRawTransaction(allowanceTx.serialize(), true),
      ])
      .then(([decimalsRes, allowanceRes]) => {
        if (decimalsRes.Error) {
          throw new Error(decimalsRes.Result);
        }
        if (allowanceRes.Error) {
          throw new Error(allowanceRes.Result);
        }
        const decimals = Number(decimalsRes.Result.Result);
        const allowance = reverseHex2FixedNumStr(allowanceRes.Result.Result, decimals);

        resolve({
          amount: allowance.toString(),
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
