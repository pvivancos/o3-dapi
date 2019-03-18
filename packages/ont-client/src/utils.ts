import {
  CONST,
} from 'ontology-ts-sdk';

const {
  TEST_ONT_URL,
  MAIN_ONT_URL,
} = CONST;

import { Network } from './constants';

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

export function getNetworkUrl(network: Network) {
  switch (network) {
    case Network.MainNet:
      return MAIN_ONT_URL.REST_URL;
    case Network.TestNet:
      return TEST_ONT_URL.REST_URL;
  }
}
