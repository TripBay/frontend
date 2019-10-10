import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'homepage-top-destination',
  templateUrl: './homepage-top-destination.component.html',
  styleUrls: ['./homepage-top-destination.component.css']
})
export class HomepageTopDestinationComponent implements OnInit {

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
    onLazyLoad: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    } };
  CarouselOptions = { items: 9, dots: true, nav: true ,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:4
      }
    }
    };
}
