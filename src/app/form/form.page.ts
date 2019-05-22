import { Component, OnInit } from '@angular/core';
import { PeopleInfo } from './people-info';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  public peopleInfo:PeopleInfo = {
    userName:'',
    age:20,
    flag:true,
    payType:"1",
    checkBoxList:[
      {val:'唱',isChecked:true},
      {val:'跳',isChecked:true},
      {val:'rap',isChecked:true},
      {val:'篮球',isChecked:true},
    ],
    cityList:["北京","上海","广州"],
    city:"北京",
    remark:""

  }
  constructor() { }

  ngOnInit() {
  }

}
