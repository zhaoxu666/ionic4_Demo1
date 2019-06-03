import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { reject } from 'q';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit ,warning {

  constructor() { }

  ngOnInit() {
    this.asyncFun();
  }

  timer(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log("第一个异步方法");
        let num = 4000;
        resolve(num);
      },5000)
    })
  }

 
  timer2(num){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log(`第二个异步方法${num}`);
        let  num2 = 1000;
        resolve(num2);
      },num)
    })
  }

  fun3(num){
    console.log(num);
  }

  async asyncFun(){
   let fun1 =  await this.timer();
   let fun2 = await this.timer2(fun1);
   this.fun3(fun2);
   console.log(1111);
   console.log(2222);
  }

  warn(){

  }
  
}

export interface warning{
   warn();
}
