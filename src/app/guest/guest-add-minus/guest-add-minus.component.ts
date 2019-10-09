import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'guest-add-minus',
  templateUrl: './guest-add-minus.component.html',
  styleUrls: ['./guest-add-minus.component.css']
})
export class GuestAddMinusComponent implements OnInit {

  guestCounter: number = 0;

  constructor() { }

  ngOnInit() {
  }

  addGuest() {
    this.guestCounter += 1;
  }

  minusGuest() {
    if(this.guestCounter !== 0)
    this.guestCounter -= 1;
  }
}
