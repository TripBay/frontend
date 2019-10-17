import { UserService } from '@app/_services';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {
  loading = false;
  guests: Object;

  constructor(private guestService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.loading = true;
    this.guestService.getUsers().subscribe((datas: any) => {
      this.loading = false;
      this.guests = datas.data;
      console.log(this.guests)
    });
  }
}
