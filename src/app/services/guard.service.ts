import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor() { }

  canActivate(){
    let num = Math.floor(Math.random()*10+1);
    console.log(num);
    if(num > 5){
      return true;
    }
    alert("没有权限");
    return false;
  }
}
