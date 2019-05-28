import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(private actionSheetController:ActionSheetController) { }

  ngOnInit() {
  }

 async showActionSheet(){
    const actionSheet = await this.actionSheetController.create({
      header: '我是actionSheet标题',
      mode:'ios',  //设置平台
      buttons: [{
        text: '删除',  
        role: 'destructive', //角色
        icon: 'trash',  //图标
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: '分享',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: '支付',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: '收藏',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: '取消',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

  };
}
