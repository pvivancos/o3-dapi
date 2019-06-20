import { Asset } from '../constants';
export interface GetAccountSuccessOutput {
    address: string;
    tag?: string;
}
export default function getAccount({ asset }: {
    asset: Asset;
}): Promise<GetAccountSuccessOutput>;
//# sourceMappingURL=getAccount.d.ts.map