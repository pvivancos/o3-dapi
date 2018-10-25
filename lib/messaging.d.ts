import { Network, Command } from './constants';
interface SendMessageArgs {
    command: Command;
    data?: any;
    network?: Network;
    timeout?: number;
}
export declare function sendMessage({ command, data, network, timeout, }: SendMessageArgs): Promise<any>;
export {};
//# sourceMappingURL=messaging.d.ts.map