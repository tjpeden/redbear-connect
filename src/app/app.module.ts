import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ListServicesPage } from '../pages/list-services/list-services';

const Settings: CloudSettings = {
  core: {
    app_id: 'ab024ccc'
  }
};

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    AboutPage,
    ContactPage,
    HomePage,
    ListServicesPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(Settings),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
  ],
  providers: []
})
export class AppModule {}
