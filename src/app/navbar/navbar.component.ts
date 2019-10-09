import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {}

  home() {
    if(this.router.url === '/' || this.router.url === '/#home' || this.router.url === '/#' || this.router.url === '/#about'){
      return true;
    }
  }

}
