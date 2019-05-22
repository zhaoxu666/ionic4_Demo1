import { Component, OnInit } from '@angular/core';
import sd from 'silly-datetime';
@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {
  public date: string = "2019-02-05";
  public thisTime: string;
  public datePickerOpt = {
    buttons: [{
      text: "取消",
      handler: () => {
        console.log("点击取消按钮")
      }
    },
    {
      text: "确定",
      handler: (event) => {
        console.log("点击确定按钮");
        this.thisTime = `${event.year.text}-${event.month.text}-${event.day.text}`;
      }
    }
    ]

  }
  constructor() { }

  ngOnInit() {
    this.thisTime = sd.format(new Date(), 'YYYY-MM-DD')
  }
  dateTimeChange() {

    console.log("点击完成时获取日期")
  }

}
