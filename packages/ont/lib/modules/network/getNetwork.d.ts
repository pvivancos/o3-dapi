declare type NetworkType = 'MAIN' | 'TEST' | 'PRIVATE';
interface Network {
    type: NetworkType;
    address: string;
}
export declare function getNetwork(): Promise<Network>;
export {};
//# sourceMappingURL=getNetwork.d.ts.map