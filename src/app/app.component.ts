import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Device } from '@ionic-native/device/ngx';
import { JPush } from '@jiguang-ionic/jpush/ngx';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
declare var CallTrap: any;
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
  //   CallTrap.onCall(function(result) {
  //     alert("CHANGE STATE: " + result.state);
  //      // only in ringing state

  //  switch (result.state) {
  //          case "RINGING":
  //           alert("Phone is ringing" + result.number);
  //              break;
  //          case "OFFHOOK":
  //           alert("Phone is off-hook");
  //           case "IDLE":
  //           alert('phone is Idle');
  //      }

  //  });

  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.getUniqueDeviceId()
    });
  }

  getUniqueDeviceId(){
    this.uniqueDeviceID.get()
    .then((uuid)=>{
      this.uniqueId = uuid;
      alert(`成功uniqueId:${this.uniqueId}`);
    })
    .catch(err=>{
      var error = JSON.stringify(err);
      alert(`失败${error}`)
    })
  }

}
