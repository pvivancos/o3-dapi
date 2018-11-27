declare type NetworkType = 'MAIN' | 'TEST' | 'PRIVATE';
interface Network {
    type: NetworkType;
    address: string;
}
export declare function getNetworks(): Promise<Network>;
export {};
//# sourceMappingURL=getNetworks.d.ts.map