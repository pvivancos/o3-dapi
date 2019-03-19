import { Network } from '../../constants';
interface NameInput {
    network: Network;
    scriptHash: string;
}
interface NameOutput {
    name: string;
}
export declare function getName({ network, scriptHash, }: NameInput): Promise<NameOutput>;
export {};
//# sourceMappingURL=getName.d.ts.map