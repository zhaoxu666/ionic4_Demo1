import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardService } from './services/guard.service';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'button', loadChildren: './button/button.module#ButtonPageModule' },
  { path: 'news', loadChildren: './news/news.module#NewsPageModule' ,canActivate:[GuardService]},
  { path: 'toolbar', loadChildren: './toolbar/toolbar.module#ToolbarPageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'form', loadChildren: './form/form.module#FormPageModule' },
  { path: 'sildes', loadChildren: './sildes/sildes.module#SildesPageModule' },
  { path: 'searchbar', loadChildren: './searchbar/searchbar.module#SearchbarPageModule' },
  { path: 'segment', loadChildren: './segment/segment.module#SegmentPageModule' },
  { path: 'datetime', loadChildren: './datetime/datetime.module#DatetimePageModule' },
  { path: 'slide-menu', loadChildren: './slide-menu/slide-menu.module#SlideMenuPageModule' },
  { path: 'action-sheet', loadChildren: './action-sheet/action-sheet.module#ActionSheetPageModule' },
  { path: 'toast', loadChildren: './toast/toast.module#ToastPageModule' },
  { path: 'loading', loadChildren: './loading/loading.module#LoadingPageModule' },
  { path: 'little-button', loadChildren: './button/little-button/little-button.module#LittleButtonPageModule' },
  { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' },
  { path: 'pdf', loadChildren: './pdf/pdf.module#PdfPageModule' },
  { path: 'shwo-pdf', loadChildren: './components/shwo-pdf/shwo-pdf.module#ShwoPdfPageModule' },
  { path: 'viewer', loadChildren: './viewer/viewer.module#ViewerPageModule' },
  { path: 'file', loadChildren: './file/file.module#FilePageModule' },
  { path: 'tab-change', loadChildren: './tab-change/tab-change.module#TabChangePageModule' },
  { path: 'sqlite', loadChildren: './sqlite/sqlite.module#SqlitePageModule' },
  { path: 'calling', loadChildren: './calling/calling.module#CallingPageModule' },
  { path: 'ionic', loadChildren: './ionic/ionic.module#IonicPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
