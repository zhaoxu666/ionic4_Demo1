import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";
import { LoginComponent } from './components/login/login.component';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(public modalController:ModalController) { }

  ngOnInit() {
  }

  async showModal(){
    const modal = await this.modalController.create({
      component:LoginComponent, 
      componentProps:{value : 333} //传值， 打开modal 给弹出Modal传值
    })
    await modal.present();

    //login 组件给当前页面传值
    //监听当前模态对话框销毁的事件
    const { data } = await modal.onDidDismiss();
    console.log(data);
  }
}
