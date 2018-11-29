import { Transaction } from './common';
interface GetBlockInput {
    network?: string;
    block: number | string;
}
interface BlockHeader {
    Version: number;
    PrevBlockHash: string;
    TransactionsRoot: string;
    BlockRoot: string;
    Timestamp: number;
    Height: number;
    ConsensusData: number;
    ConsensusPayload: string;
    NextBookkeeper: string;
    Bookkeepers: string[];
    SigData: string[];
    Hash: string;
}
interface Block {
    Hash: string;
    Size: number;
    Header: BlockHeader;
    Transactions: Transaction[];
}
export declare function getBlock(data: GetBlockInput): Promise<Block>;
export {};
//# sourceMappingURL=getBlock.d.ts.map