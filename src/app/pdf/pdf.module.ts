import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import {PdfViewerModule} from 'ng2-pdf-viewer';  
import { IonicModule } from '@ionic/angular';

import { PdfPage } from './pdf.page';
import { ShowpdfComponent } from './components/showpdf/showpdf.component';

const routes: Routes = [
  {
    path: '',
    component: PdfPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    PdfViewerModule
  ],
  declarations: [PdfPage,ShowpdfComponent],
  entryComponents:[ShowpdfComponent]
})
export class PdfPageModule {}
