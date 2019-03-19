import { Network } from './constants';

export const methodSelector = (self, namespace, methodName, dapiMethod, requireClientNetwork = true) => {
  return data => {
    const network = data && data.network;
    const isClientNetwork = !requireClientNetwork || network === Network.MainNet || network === Network.TestNet;
    const clientMethod = self.clientPlugin && self.clientPlugin[namespace] && self.clientPlugin[namespace][methodName];
    const method = isClientNetwork && clientMethod ? clientMethod : dapiMethod;
    return method(data);
  };
};
