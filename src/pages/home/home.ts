import { Component } from '@angular/core';

import {
  NavController,
  LoadingController,
  ModalController,
} from 'ionic-angular';

import { BLE } from 'ionic-native';

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
  ) {
    BLE.enable().then(() => this.discoverDevices());
  }

  discoverDevices() {
    this.devices = [];

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
