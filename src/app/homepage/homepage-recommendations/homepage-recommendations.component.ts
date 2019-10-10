import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'homepage-recommendations',
  templateUrl: './homepage-recommendations.component.html',
  styleUrls: ['./homepage-recommendations.component.css']
})
export class HomepageRecommendationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  images = ['assets/monina1.jpg', 'assets/monina1.jpg',
             'assets/monina1.jpg', 'assets/monina1.jpg'];

  SlideOptions = {
    loop: false,
    margin:10,
    nav: false,
    autoplay: false,
    lazyLoad: true,
    mouseDrag: false,
    responsive:{
      0:{
        items:1,
        nav:true
      },
      768:{
          items:1,
          nav:true
      },
      1080:{
          items:4,
          nav:false,
          mouseDrag: false
      }
    }};
  CarouselOptions = { items: 4, dots: true, nav: true };
}
