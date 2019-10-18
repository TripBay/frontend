import { RoleService } from './../_services/role.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/_services';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  loading = false;
  roleName: any;

  constructor(
    private authenticationService: AuthenticationService,
    private roleService: RoleService
    ) { }

  ngOnInit() {
    this.roleName = this.authenticationService.currentUserValue.name;
    // console.log(this.role);
  }

}
