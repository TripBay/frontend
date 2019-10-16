import { Component, OnInit } from '@angular/core';
import { User } from '@app/models';
import { UserService, AuthenticationService } from '@app/_services';
import { first } from 'rxjs/internal/operators/first';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  loading = false;
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loading = true;
        this.userService.getUsers().pipe(first()).subscribe(users => {
            this.loading = false;
            console.log(this.users);
            this.users = users;
        });
  }

}
