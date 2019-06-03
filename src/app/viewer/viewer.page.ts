import { Component, OnInit } from '@angular/core';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.page.html',
  styleUrls: ['./viewer.page.scss'],
})
export class ViewerPage implements OnInit {
  public options: DocumentViewerOptions = {
    title: 'My PDF'
  }
  public url = 'https://www.thymeleaf.org/doc/tutorials/3.0/usingthymeleaf.pdf'
  constructor(public documentViewer:DocumentViewer,public iab:InAppBrowser) { }

  ngOnInit() {
   // this.documentViewer.viewDocument(this.url,'application/pdf',this.options);
  this.iab.create(this.url);
  }
  
  
  
  
}
