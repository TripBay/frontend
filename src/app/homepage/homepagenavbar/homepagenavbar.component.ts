import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'homepagenavbar',
  templateUrl: './homepagenavbar.component.html',
  styleUrls: ['./homepagenavbar.component.css']
})
export class HomepagenavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
