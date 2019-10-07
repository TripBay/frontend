import { Component, OnInit } from '@angular/core';
import { Guest } from '../guest';


@Component({
  selector: 'guest-counter',
  templateUrl: './guest-counter.component.html',
  styleUrls: ['./guest-counter.component.css']
})
export class GuestCounterComponent implements OnInit {

  guestCounter: number = 0;

  constructor() { }

  ngOnInit() {
  }

  addGuest() {
    return this.guestCounter += 1;
  }

  minusGuest() {
    return this.guestCounter -= 1;
  }

  wontClose(){
    event.stopPropagation();
  }

}
