import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Device } from '@ionic-native/device/ngx';
import { JPush } from '@jiguang-ionic/jpush/ngx';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public registrationId: string;
  public uuid:any;
  devicePlatform: string;
  sequence: number = 0;
  public uniqueId:any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private device: Device,
    private jpush:JPush,
    private uniqueDeviceID:UniqueDeviceID
  ) {
    this.devicePlatform = this.device.platform;
    this.uuid = this.device.uuid;
    
    this.initializeApp();
    console.log(this.uuid)

  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  getUniqueDeviceId(){
    this.uniqueDeviceID.get()
    .then((uuid)=>{
      this.uniqueId = uuid;
      alert(`成功${this.uniqueId}`);
    })
    .catch(err=>{
      var error = JSON.stringify(err);
      alert(`失败${error}`)
    })
  }

}
