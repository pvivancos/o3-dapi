import { BigNumber } from 'bignumber.js';

export function parseError(err) {
  try {
    if (err instanceof Error) {
      return err.toString();
    }

    return err;
  } catch (error) {
    return err;
  }
}

export function int2FixedDecimalStr(value: number, decimals: number): string {
  const number = new BigNumber(value);

  if (number.isEqualTo('0')) {
    return '0';
  }

  return trimDecimalStr(number.dividedBy(Math.pow(10, decimals)).toFixed(decimals));
}

function trimDecimalStr(numberSrt) {
  const parts = numberSrt.split('.');

  if (parts.length === 1) {
    return numberSrt;
  }

  if (Number(parts[1]) === 0) {
    return parts[0];
  }

  const trimmedDecimalString = parts[1].replace(/\.?0+$/, '');
  return `${parts[0]}.${trimmedDecimalString}`;
}
