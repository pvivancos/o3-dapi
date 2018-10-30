interface SendArgs {
    to: string;
    asset: string;
    amount: string;
    remark?: string;
    fee?: string;
}
export declare function send(data: SendArgs, network?: string): Promise<string>;
export {};
//# sourceMappingURL=send.d.ts.map