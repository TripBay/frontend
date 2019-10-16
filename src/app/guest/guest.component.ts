import { UserService } from '@app/_services';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {

  guests: Object;

  constructor(private guestService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.guestService.getUsers().subscribe((datas: any) => {
      this.guests = datas.data;
      console.log(this.guests)    });
  }

  getUser(id: number){

  }
}
