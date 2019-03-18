import { Network } from '../../constants';
interface GetStorageInput {
    contract: string;
    key: string;
    network: Network;
}
export declare function getStorage({ network, contract, key, }: GetStorageInput): Promise<string>;
export {};
//# sourceMappingURL=getStorage.d.ts.map