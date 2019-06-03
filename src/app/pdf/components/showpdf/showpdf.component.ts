import { Component, OnInit } from '@angular/core';
import { NavParams, NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-showpdf',
  templateUrl: './showpdf.component.html',
  styleUrls: ['./showpdf.component.scss'],
})
export class ShowpdfComponent implements OnInit {
  private url: string;
  public loaded = false;
  public pagesRendered = 0;
  pageCount: number;
  public loading:any;
  constructor(private navParams: NavParams, private navCtrl: NavController,private loadingController:LoadingController) {
    this.url = this.navParams.data.url;
    this.presentLoading();
  }

  ngOnInit() { }

  doClose() {
    if (this.loaded) {
      this.navParams.data.modal.dismiss({});
      //this.navCtrl.pop();
    }
  }

  callBackFn(event) {
    this.pageCount = event._pdfInfo.numPages;
  }

  pageRendered = () => {
    this.pagesRendered += 1;
    if (this.pagesRendered === this.pageCount) {
      this.renderComplete();
    }
  };

  renderComplete = () => {
    this.loaded = true;
    this.loading.dismiss();
  }

  async presentLoading() {
     this.loading = await this.loadingController.create({
      message: '',
    });
    await this.loading.present();

    const { role, data } = await this.loading.onDidDismiss();

  }
}
