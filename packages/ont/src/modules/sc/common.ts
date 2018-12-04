export enum ParameterType {
  BOOLEAN = 'Boolean',
  INTEGER = 'Integer',
  BYTEARRAY = 'ByteArray',
  STRUCT = 'Struct',
  MAP = 'Map',
  STRING = 'String',
  ADDRESS = 'Address',
}

export interface Parameter {
  type: ParameterType;
  value: any;
}
