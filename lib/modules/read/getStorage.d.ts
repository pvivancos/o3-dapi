import { Network } from '../../constants';
interface GetStorageArgs {
    scriptHash: string;
    key: string;
}
export declare function getStorage(data: GetStorageArgs, network?: Network): Promise<string>;
export {};
//# sourceMappingURL=getStorage.d.ts.map