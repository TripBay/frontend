import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toBook() {
    document.getElementById("book-section").scrollIntoView(
      {
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    });
  }
}
