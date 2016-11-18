import { Characteristic } from './characteristic';

export interface Device {
  name: string;
  id: string;
  advertising: ArrayBuffer;
  rssi: number;
  services?: Array<string>;
  characteristics?: Array<Characteristic>;
}
