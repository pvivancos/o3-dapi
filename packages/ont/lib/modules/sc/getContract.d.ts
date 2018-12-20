interface GetContractInput {
    hash: string;
    network: string;
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
export declare function getContract(data: GetContractInput): Promise<Contract>;
export {};
//# sourceMappingURL=getContract.d.ts.map