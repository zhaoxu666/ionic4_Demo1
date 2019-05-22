import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-sildes',
  templateUrl: './sildes.page.html',
  styleUrls: ['./sildes.page.scss'],
})
export class SildesPage implements OnInit {
  @ViewChild('slides') slides;
  @ViewChild('slide1') slide1;
  public slideOpts:any = {
      autoplay:{
        delay:2000
      },
      loop:true
  }
  constructor() { }

  ngOnInit() {
  }

  slidesNext(){
    this.slides.slideNext();
  }
  slidesPre(){
    this.slides.slidePrev();
  }
  slidesUpdate(){
    this.slides.update();
  }
  autoPlay(){
      this.slide1.startAutoplay();
      console.log(111);
  }
}
