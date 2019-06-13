import { Component, OnInit, HostListener } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Sim } from '@ionic-native/sim/ngx';
import {Network} from "@ionic-native/network/ngx";
import { Subject, Observable } from 'rxjs';
declare var CallTrap:any;
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
  public eventBus: Subject<string> = new Subject<string>();
  constructor(private media:Media,private file: File,private callNumber:CallNumber,
              private sim :Sim,private network:Network) { 
    }

  ngOnInit() {
      this.checkNetwork();
      var _that = this;
      CallTrap.onCall(function(state) {
        console.log("电话状态: " + state.state);
    
        switch (state.state) {
            case "RINGING":
                console.log("Phone is ringing 电话响铃");
                break;
            case "OFFHOOK":
                console.log("Phone is off-hook 电话挂断");
               
                _that.stopRecord();
                break;
    
            case "IDLE":
                console.log("Phone is idle 电话空闲");
                break;
        }
    },function(err){
      
    });
  }

  //开始打电话
  startCallNumber(){
    let callNumber = '15801659170';
    this.startReocrd();
    this.callNumber.callNumber(callNumber,true)
    .then(res=>{
      alert(`拨打成功${res}`);
     
  
    },err=>{
      alert(`拨打失败${err}`);
      this.stopRecord();
    })
  }




  startReocrd(){
    this.filePath = this.file.externalDataDirectory + "Record.wav";
    this.recordData = this.media.create(this.filePath);
    this.recordData.startRecord();
    console.log('录音文件目录：' + JSON.stringify(this.file));
    console.log('开启录音')
  }

  pauseRecord(){   

    //暂停录音
    this.recordData.pauseRecord();
    console.log('暂停录音')
}

play(){   

    //播放录音
    this.recordData.play();
    console.log('播放录音')

}

resumeRecord(){   

    //继续播放录音
    this.recordData.resumeRecord();
    console.log('继续播放录音')
}

stopRecord(){   

    //停止结束录音
    this.recordData.stopRecord();
    this.recordData.release();
    console.log('停止录音')

}

//获取sim
getSimInfo(){
  this.sim.getSimInfo()
  .then(info=>{
    let result = JSON.stringify(info);
    alert(`获取成功${result}`)
  })
  .catch(err=>{
    let error = JSON.stringify(err);
    alert(`获取成功${error}`)
  })
}

checkNetwork() {
  // let disconnectSubscription = this.network.onDisconnect().subscribe(()=>{
  //   alert('network was disconnected');
  // });
  // disconnectSubscription.unsubscribe();


  let connectSubscription = this.network.onConnect().subscribe(()=>{
    if(this.network.type === 'unknown') {
      alert('This is a unknown network, please be careful!');
    } else if(this.network.type === 'none') {
      alert('none network!')
    } else {
      alert('we got a ' + this.network.type + ' connection, woohoo!');
    }
  })
 
}

GetSimInfo():Observable<any>{
  return this.eventBus.asObservable();
}

Clear() {
  this.eventBus.unsubscribe();
}

getPhoneCallStatus(){
  CallTrap.onCall(function(state) {
    console.log("CHANGE STATE: " + state.state);

    switch (state.state) {
        case "RINGING":
            alert("Phone is ringing");
            break;
        case "OFFHOOK":
          alert("Phone is off-hook");
            break;

        case "IDLE":
          alert("Phone is idle");
            break;
    }
});
}


}
