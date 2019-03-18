import { Network } from '../../constants';
interface GetGasPriceInput {
    network: Network;
}
interface GasPrice {
    gasPrice: number;
    height: number;
}
export declare function getGasPrice({ network, }: GetGasPriceInput): Promise<GasPrice>;
export {};
//# sourceMappingURL=getGasPrice.d.ts.map