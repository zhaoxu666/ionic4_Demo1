import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SqlitePage } from './sqlite.page';
import { SQLService } from '../services/sql.service';

const routes: Routes = [
  {
    path: '',
    component: SqlitePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers:[
    SQLService
  ],
  declarations: [SqlitePage]
})
export class SqlitePageModule {}
