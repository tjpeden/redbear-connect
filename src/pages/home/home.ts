import { Component } from '@angular/core';

import {
  NavController,
  LoadingController,
  ModalController,
} from 'ionic-angular';

import { BLE } from 'ionic-native';

import { ListServicesPage } from '../list-services/list-services';

import { Device } from '../../models/device';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  devices: Array<Device>;

  constructor(
    public nav: NavController,
    public loadingController: LoadingController,
    public modalController: ModalController
  ) {}

  ionViewDidLoad() {
    BLE.enable().then(() => this.discoverDevices());
  }

  ionViewWillLeave() {
    BLE.stopScan();
  }

  discoverDevices() {
    this.devices = [
      {
        "name": "Battery Demo",
        "id": "20:FF:D0:FF:D1:C0",
        "advertising": new ArrayBuffer(31),
        "rssi": -55,
        "services": [
          "1800",
          "1801",
          "180f"
        ],
        "characteristics": [
          {
            "service": "1800",
            "characteristic": "2a00",
            "properties": [
              "Read"
            ]
          },
          {
            "service": "1800",
            "characteristic": "2a01",
            "properties": [
              "Read"
            ]
          },
          {
            "service": "1801",
            "characteristic": "2a05",
            "properties": [
              "Read"
            ]
          },
          {
            "service": "180f",
            "characteristic": "2a19",
            "properties": [
              "Read"
            ],
            "descriptors": [
              {
                "uuid": "2901"
              },
              {
                "uuid": "2904"
              }
            ]
          }
        ]
      }
    ];

    BLE.startScan([]).subscribe(device => this.onDiscoverDevice(device));
  }

  onDiscoverDevice(device: Device) {
    this.devices.push(device);
  }

  onError(error: Error) {
    console.error(error);
  }

  connect(event: Event, device: Device) {
    let connecting = this.loadingController.create({
      content: "Connecting, please wait..."
    });

    BLE.stopScan();

    connecting.present();

    BLE.connect(device.id).subscribe(() => {
      let modal = this.modalController.create(ListServicesPage, {device});

      modal.onDidDismiss(() => this.discoverDevices());

      connecting.dismiss();

      modal.present();
    });
  }
}
