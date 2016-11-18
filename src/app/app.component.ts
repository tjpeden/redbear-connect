import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Deploy } from '@ionic/cloud-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform, deploy: Deploy) {
    deploy.channel = 'dev';

    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();

      deploy.check().then((snapshotAvailavle: boolean) => {
        if(snapshotAvailavle) {
          deploy.download().then(() => {
            return deploy.extract();
          }).then(() => {
            deploy.load();
          });
        }
      });
    });
  }
}
