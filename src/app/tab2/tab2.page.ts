import { Component } from '@angular/core';
import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  list:any[] = [];
  constructor(private httpService:HttpServiceService){
    for(let i = 0;i<16;i++){
      this.list.push(`这是第${i}条数据`)
    }
  }

  loadData(event){
    setTimeout(()=>{
      for(let i = 0;i<10;i++){
        this.list.push(`这是第${i}条数据--服务器获取`);

      }
      //数据已经更新完成，不加会卡死
      event.target.complete();
    },1000);

    //判断 后台没有数据后 禁用加载
     if(this.list.length > 40){
       event.target.disabled = true;
     }

  }

  getData(){
    let api = ""
    this.httpService.get(api).then((response)=>{
        console.log(response);
    })
  }

}
