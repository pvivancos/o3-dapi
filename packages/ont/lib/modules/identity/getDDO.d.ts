interface GetDDOInput {
    identity: string;
}
interface OntIdAttribute {
    key: string;
    type: string;
    value: string;
}
interface OntIdDDO {
    attributes: OntIdAttribute[];
}
export declare function getDDO(data: GetDDOInput): Promise<OntIdDDO>;
export {};
//# sourceMappingURL=getDDO.d.ts.map