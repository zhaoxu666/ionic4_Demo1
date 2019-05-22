import { Component, OnInit } from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  public list:any = [];
  constructor() { }

  ngOnInit() {
    for(let i = 0;i<10;i++){
      this.list.push(`我是第${i}条数据`);
    }
  }

}
