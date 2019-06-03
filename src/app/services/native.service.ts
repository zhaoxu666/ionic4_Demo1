import { Injectable } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NativeService {
  public title = "";
  constructor(private platform:Platform,private alertCtrl:AlertController) { }

  isMobile(): boolean
  {
    return this.platform.is("mobile") && !this.platform.is("mobileweb");
  }


  /**
   * 是否android真机环境
   * @returns {boolean}
   * @memberof NativeService
   */
  isAndroid(): boolean
  {
    return this.isMobile() && this.platform.is("android");
  }

  async confirm(message: string, title?: string, confirmHandler?: (...args: any[]) => void, confirmText?: string,
    cancelHandler?: (...args: any[]) => void)
  {
    let confirm = await  this.alertCtrl.create({
      header: title ? title : this.title,
        message: message,
      buttons:[
            {
                text:"取消",
                role: "cancel",
                handler: () => {
                    if(cancelHandler) cancelHandler();
                }
            },
            {
                text: confirmText || "确定",
                handler: () => {
                    if(confirmHandler) confirmHandler();
                }
            }
      ],
      cssClass: "alert"
    });
    await  confirm.present();
  }
}
