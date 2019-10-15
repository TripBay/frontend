import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'customer-reviews',
  templateUrl: './customer-reviews.component.html',
  styleUrls: ['./customer-reviews.component.css']
})
export class CustomerReviewsComponent implements OnInit {

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
        nav:true,
        dots: false
      },
      768:{
          items:2,
          nav:true,
          dots: false
      },
      1080:{
          items:4,
          nav:true
      }
    }};
  CarouselOptions = { items: 9, dots: true, nav: true };

}
