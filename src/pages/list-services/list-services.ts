import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Device } from '../../models/device';

@Component({
  selector: 'page-list-services',
  templateUrl: 'list-services.html'
})
export class ListServicesPage {
  device: Device;

  constructor(
    public nav: NavController,
    public params: NavParams,
  ) {
    this.device = params.get('device');
  }

  ionViewDidLoad() {
    console.log('Hello ListServicesPage Page');
  }
}
