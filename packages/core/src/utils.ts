import base58 from 'bs58';

export function hex2str(input: string): string {
  return ab2str(hex2ab(input));
}

export function str2hex(input: string): string {
  return ab2hex(str2ab(input));
}

export function hex2int(input: string): number {
  return parseInt(reverseHex(input), 16);
}

export function num2hex(input: number): string {
  const h = input.toString(16);
  return h.length % 2 ? '0' + h : h;
}

export function reverseHex(input: string): string {
  let out = '';
  for (let i = input.length - 2; i >= 0; i -= 2) {
    out += input.substr(i, 2);
  }
  return out;
}

export function address2scriptHash(input: string): string {
  const hash = ab2hex(base58.decode(input));
  return reverseHex(hash.substr(2, 40));
}

export function scriptHash2address(input: string): string {
  // input = reverseHex(input);
  // const shaChecksum = hash256('17' + input).substr(0, 8);
  // return base58.encode(
  //   Buffer.from('17' + input + shaChecksum, 'hex')
  // );
}

function ab2str(input: ArrayBuffer | ArrayLike<number>): string {
  return String.fromCharCode(...new Uint8Array(input));
}

function str2ab(input: string): Uint8Array {
  const result = new Uint8Array(input.length);
  for (let i = 0; i < input.length; i++) {
    result[i] = input.charCodeAt(i);
  }
  return result;
}

function ab2hex(input: ArrayBuffer | ArrayLike<number>): string {
  let result = '';
  const intArray = new Uint8Array(input);
  for (const i of intArray) {
    let str = i.toString(16);
    str = str.length === 0 ? '00' : str.length === 1 ? '0' + str : str;
    result += str;
  }
  return result;
}

function hex2ab(input: string): Uint8Array {
  const result = [];
  while (input.length >= 2) {
    result.push(parseInt(input.substring(0, 2), 16));
    input = input.substring(2, input.length);
  }
  return new Uint8Array(result);
}
