import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-list-services',
  templateUrl: 'list-services.html'
})
export class ListServicesPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ListServicesPage Page');
  }

}
