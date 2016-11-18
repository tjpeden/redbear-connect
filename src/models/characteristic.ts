export interface Characteristic {
  service: string;
  characteristic: string;
  properties: Array<string>;
  descriptors?: Array<{uuid: string}>;
}
