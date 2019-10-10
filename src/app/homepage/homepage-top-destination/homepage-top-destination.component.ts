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
    autoplayHoverPause:true,
    onLazyLoad: true,
    responsiveClass:true,
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
            items:4,
            nav:true
        }
    } };
  CarouselOptions = { items: 9, dots: true, nav: true , responsiveClass: true};
}
