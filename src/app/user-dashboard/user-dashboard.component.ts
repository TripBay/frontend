import { RoleService } from './../_services/role.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/_services';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  loading
  role_id: number;
  role: any;

  constructor(
    private authenticationService: AuthenticationService,
    private roleService: RoleService
    ) { }

  ngOnInit() {
    this.role_id = this.authenticationService.currentUserValue.role_id;
    // console.log(this.role);
    this.getRole(this.role_id);
  }

  getRole(id: number) {
    this.roleService.getRole(id).subscribe(datas => {
      console.log(datas);
      this.role = datas;
    });
  }

}
