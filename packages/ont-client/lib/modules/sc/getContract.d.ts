import { Network } from '../../constants';
interface GetContractInput {
    hash: string;
    network: Network;
}
interface Contract {
    Code: string;
    NeedStorage: boolean;
    Name: string;
    CodeVersion: string;
    Author: string;
    Email: string;
    Description: string;
}
export declare function getContract({ network, hash, }: GetContractInput): Promise<Contract>;
export {};
//# sourceMappingURL=getContract.d.ts.map