import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";
import { ShowpdfComponent } from './components/showpdf/showpdf.component';
@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.page.html',
  styleUrls: ['./pdf.page.scss'],
})
export class PdfPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }

  async openPdfFile(){
    let url= 'https://www.thymeleaf.org/doc/tutorials/3.0/usingthymeleaf.pdf';
    //let url= 'assets/wordTest.docx';
    const modal = await this.modalController.create({
      component:ShowpdfComponent, 
      componentProps:{url : url} //传值， 打开modal 给弹出Modal传值
    })
    await modal.present();

  }

}
