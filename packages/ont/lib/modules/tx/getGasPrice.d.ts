interface GetGasPriceInput {
    network: string;
}
interface GasPrice {
    gasPrice: number;
    height: number;
}
export declare function getGasPrice(data: GetGasPriceInput): Promise<GasPrice>;
export {};
//# sourceMappingURL=getGasPrice.d.ts.map