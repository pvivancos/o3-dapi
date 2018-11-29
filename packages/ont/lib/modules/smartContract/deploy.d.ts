interface DeployInput {
    code: string;
    name?: string;
    version?: string;
    author?: string;
    email?: string;
    description?: string;
    needStorage?: boolean;
    gasPrice?: number;
    gasLimit?: number;
}
export declare function deploy(data: DeployInput): Promise<void>;
export {};
//# sourceMappingURL=deploy.d.ts.map