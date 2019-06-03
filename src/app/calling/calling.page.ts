import { Component, OnInit } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Sim } from '@ionic-native/sim/ngx';
declare var PhoneCallTrap:any;
@Component({
  selector: 'app-calling',
  templateUrl: './calling.page.html',
  styleUrls: ['./calling.page.scss'],
})
export class CallingPage implements OnInit {
  public tel = `tel:17600980725`;
  public tel1 = `17600980725`;
  public filePath:any;
  public  recordData:MediaObject;
  constructor(private media:Media,private file: File,private callNumber:CallNumber,
              private sim :Sim) { 

    }

  ngOnInit() {
  }

  //开始打电话
  startCallNumber(){
    let callNumber = '17600980725';
    this.callNumber.callNumber(callNumber,true)
    .then(res=>{
      let result = JSON.stringify(res);
      alert(`拨打成功${result}`);
      //监听获取呼叫状态
      //this.onDeviceReady();
      this.phonecalls();
    })
    .catch(err=>{
      let error = JSON.stringify(err);
      alert(`拨打失败${error}`);
    })
  }

// onDeviceReady(){ 
//     this.sim.getSimInfo()
//     .then(info=>{
//       let result = JSON.stringify(info);
//       alert(`获取成功${result}`)
//     })
//     .catch(err=>{
//       let error = JSON.stringify(err);
//       alert(`获取成功${error}`)
//     })
// } 

phonecalls() {
  PhoneCallTrap.onCall(function (obj) {

    var callObj = JSON.parse(obj),
      state = callObj.state,
      callingNumber = callObj.incomingNumber;

    switch (state) {
      case "RINGING":
        console.log("Phone is ringing", callingNumber);
        break;
      case "OFFHOOK":
        console.log("Phone is off-hook");
        break;

      case "IDLE":
        console.log("Phone is idle");
        break;
    }
  });
}

  startReocrd(){
    this.filePath = this.file.externalDataDirectory + "Record.mp3";
    this.recordData = this.media.create(this.filePath);
    this.recordData.startRecord();
  }

  pauseRecord(){   

    //暂停录音
    this.recordData.pauseRecord();

}

play(){   

    //播放录音
    this.recordData.play();

}

resumeRecord(){   

    //继续播放录音
    this.recordData.resumeRecord();

}

stopRecord(){   

    //停止结束录音
    this.recordData.stopRecord();

}

}
