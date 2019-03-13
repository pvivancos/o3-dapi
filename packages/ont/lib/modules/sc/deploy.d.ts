interface DeployInput {
    code: string;
    name?: string;
    version?: string;
    author?: string;
    email?: string;
    description?: string;
    needStorage?: boolean;
    gasPrice?: string;
    gasLimit?: string;
    network: string;
}
export declare function deploy(data: DeployInput): Promise<void>;
export {};
//# sourceMappingURL=deploy.d.ts.map