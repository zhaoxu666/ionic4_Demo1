import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular'; //接收Modal页面传过来的值

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private navParams:NavParams) {
    console.log(this.navParams);

   }

  ngOnInit() {}

  //关闭模态对话框
  doClose(){
    this.navParams.data.modal.dismiss({
      //当前组件销毁时， 传给父级组件 数据
      result:{
        msg:"我是login组件modal销毁时，传回给父级组件的数据"
      }
    });
  }
}
