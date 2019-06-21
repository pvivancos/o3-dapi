import { Asset } from '../constants';
export interface GetAccountArgs {
    asset: Asset;
}
export interface GetAccountSuccessOutput {
    address: string;
    tag?: string;
}
export default function getAccount(data: GetAccountArgs): Promise<GetAccountSuccessOutput>;
//# sourceMappingURL=getAccount.d.ts.map