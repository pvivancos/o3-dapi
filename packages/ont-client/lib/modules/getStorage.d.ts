import { Network } from '../constants';
export interface GetStorageArgs {
    scriptHash: string;
    key: string;
    network: Network;
}
export interface GetStorageOutput {
    result: string;
}
export default function getStorage({ scriptHash, key, network, }: GetStorageArgs): Promise<{}>;
//# sourceMappingURL=getStorage.d.ts.map