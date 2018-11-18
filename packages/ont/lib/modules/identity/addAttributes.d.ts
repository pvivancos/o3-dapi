interface OntIdAttribute {
    key: string;
    type: string;
    value: string;
}
interface AddAttributesInput {
    attributes: OntIdAttribute[];
}
export declare function addAttributes(data: AddAttributesInput): Promise<void>;
export {};
//# sourceMappingURL=addAttributes.d.ts.map