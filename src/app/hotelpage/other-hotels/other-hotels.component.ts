import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-hotels',
  templateUrl: './other-hotels.component.html',
  styleUrls: ['./other-hotels.component.css']
})
export class OtherHotelsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  images = ['assets/monina1.jpg', 'assets/monina1.jpg',
             'assets/monina1.jpg', 'assets/monina1.jpg',
              'assets/monina1.jpg', 'assets/monina1.jpg',
               'assets/monina1.jpg', 'assets/monina1.jpg',
               'assets/monina1.jpg'];

  SlideOptions = {
    loop:true,
    margin:10,
    items: 3,
    nav:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    lazyLoad: true,
    responsive:{
      0:{
        items:1,
        nav:false,
        dots: false
      },
      768:{
          items:2,
          nav:false,
          dots: false
      },
      1080:{
          items:3
      }
    }};
  CarouselOptions = { items: 8, dots: true, nav: true };
}
