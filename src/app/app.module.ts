import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Device } from '@ionic-native/device/ngx';
import { JPush } from '@jiguang-ionic/jpush/ngx';
import { HttpClientModule } from '@angular/common/http';
import { HttpServiceService } from './services/http-service.service';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import {PdfViewerModule} from 'ng2-pdf-viewer'; 
import { SQLite } from '@ionic-native/sqlite/ngx';
import { NativeService } from './services/native.service';
import { SQLService } from './services/sql.service';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { Media } from '@ionic-native/media/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Sim } from '@ionic-native/sim/ngx';
import {Network} from "@ionic-native/network/ngx";
import { Camera } from '@ionic-native/camera/ngx';
import { CameraPreview } from '@ionic-native/camera-preview/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,PdfViewerModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Device,
    JPush,
    HttpServiceService,
    DocumentViewer,
    InAppBrowser,
    File,
    FileOpener,
    FileTransfer,
    SQLite,
    NativeService,
    SQLService,
    UniqueDeviceID,
    Media,
    CallNumber,
    Sim,
    Network,
    Camera,
    CameraPreview
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
