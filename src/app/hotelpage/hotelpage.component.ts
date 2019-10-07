import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotelpage',
  templateUrl: './hotelpage.component.html',
  styleUrls: ['./hotelpage.component.css']
})
export class HotelpageComponent implements OnInit {

  checkInNameDate = "Check In";
  checkOutNameDate = "Check Out";

  bookingMinDate = new Date();

  constructor() { }

  ngOnInit() {
  }

}
