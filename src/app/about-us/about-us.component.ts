import { GuestService } from './../guest/guest.service';
import { Component, OnInit } from '@angular/core';
import { Guest } from '../guest/guest';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  response: any;
  guests: Guest[];
  constructor(private guestService: GuestService) { }

  ngOnInit() {}

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
