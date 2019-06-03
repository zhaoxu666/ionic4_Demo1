import { Component, OnInit, ViewChild } from '@angular/core';
import { Tabs } from './tab-change.enum';

@Component({
  selector: 'app-tab-change',
  templateUrl: './tab-change.page.html',
  styleUrls: ['./tab-change.page.scss'],
})
export class TabChangePage implements OnInit {
  public tab = Tabs.Introduction;
  @ViewChild('slides') slides;
  constructor() {
   }

  ngOnInit() {
  }



  didChange() {
    this.slides.getActiveIndex().then(res => {
      switch (res) {
        case 0:
          this.tab = Tabs.Introduction;
          break;
        case 1:
          this.tab = Tabs.Details;
          break;
        case 2:
          this.tab = Tabs.Comment;
          break;
      }

    })
  }

  slideToPage(index) {
    this.slides.slideTo(index);
  }

  changeSlide(tab) {
    switch (tab) {
      case Tabs.Introduction:
          this.slideToPage(Tabs.Introduction);
        break;
      case Tabs.Details:
          this.slideToPage(Tabs.Details);
        break;
      case Tabs.Comment:
          this.slideToPage(Tabs.Comment);
        break;
    }
  }


}
