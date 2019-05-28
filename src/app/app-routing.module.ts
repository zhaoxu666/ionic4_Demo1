import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'button', loadChildren: './button/button.module#ButtonPageModule' },
  { path: 'news', loadChildren: './news/news.module#NewsPageModule' },
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
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
