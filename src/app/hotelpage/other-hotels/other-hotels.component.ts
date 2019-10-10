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
    nav:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    lazyLoad: true,
    responsive:{
      0:{
        items:1,
        nav:true
      },
      768:{
          items:2,
          nav:true
      },
      1080:{
          items:3,
          nav:true
      }
    }};
  CarouselOptions = { items: 8, dots: true, nav: true };
}
