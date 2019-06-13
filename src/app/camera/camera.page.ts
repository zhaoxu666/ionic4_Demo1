import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';
declare let ImagePicker:any
@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
  imageDatas: any[] = [];
  imageDatasPreview: any[] = [];
  imageDatasSnapShot:any[] = [];
  constructor(private camera:Camera,private cameraPreview:CameraPreview) { }

  ngOnInit() {
  }

  openCamera(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
      correctOrientation: true,
      //allowEdit: true,
      targetWidth: 1024,
      targetHeight: 768,
    }
    
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.imageDatas.push({ FileName: this.imageDatas.length + 1 + ".jpg", Data: "data:image/jpeg;base64," + imageData });
     }, (err) => {
      // Handle error
     });

  }

  openCameraPreview(){
    const cameraPreviewOpts: CameraPreviewOptions = {
      x: 0,
      y: 0,
      width: window.screen.width,
      height: window.screen.height,
      camera: 'rear',
      tapPhoto: true,
      previewDrag: true,
      toBack: true,
      alpha: 1
    }

    this.cameraPreview.startCamera(cameraPreviewOpts).then(
      (res) => {
        console.log(res)
      },
      (err) => {
        console.log(err)
      });
   
     
  }

  takePicture(){
    const pictureOpts: CameraPreviewPictureOptions = {
      width: 1280,
      height: 1280,
      quality: 85
    }
    this.cameraPreview.takePicture(pictureOpts).then((imageData) => {
      this.imageDatasPreview.push({ FileName: this.imageDatas.length + 1 + ".jpg", Data: "data:image/jpeg;base64," + imageData });
    }, (err) => {
      console.log(err);
    });
  }

  showCameraPreview(){
    this.cameraPreview.show().then(res=>{
      console.log(res);
      //this.takePicture();
    },err=>{
      console.log(err);
    })
  }

  takeSnapshot(){
    const pictureOpts: CameraPreviewPictureOptions = {
      quality: 85
    }
    this.cameraPreview.takePicture(pictureOpts).then((imageData) => {
      this.imageDatasSnapShot.push({ FileName: this.imageDatas.length + 1 + ".jpg", Data: "data:image/jpeg;base64," + imageData });
    }, (err) => {
      console.log(err);
    });
  }

  imagePicker(){
    ImagePicker.takePhoto(response=>{
      alert(JSON.stringify(response));
    },err=>{
      alert(JSON.stringify(err));
    },{ 
      width : 1920, 
      height : 1440, 
      quality : 50 
  })
  }
}
