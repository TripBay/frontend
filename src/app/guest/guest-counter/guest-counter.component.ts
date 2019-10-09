import { Component, OnInit } from '@angular/core';
import { Guest } from '../guest';


@Component({
  selector: 'guest-counter',
  templateUrl: './guest-counter.component.html',
  styleUrls: ['./guest-counter.component.css']
})
export class GuestCounterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  wontClose(){
    event.stopPropagation();
  }

}
