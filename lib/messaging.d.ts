interface SendMessageArgs {
    command: string;
    data?: any;
    timeout?: number;
}
export declare function sendMessage({ command, data, timeout }: SendMessageArgs): Promise<any>;
export {};
//# sourceMappingURL=messaging.d.ts.map