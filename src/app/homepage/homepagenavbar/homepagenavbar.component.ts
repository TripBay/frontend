import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/_services';
import { User } from '@app/models';

@Component({
  selector: 'homepagenavbar',
  templateUrl: './homepagenavbar.component.html',
  styleUrls: ['./homepagenavbar.component.css']
})
export class HomepagenavbarComponent implements OnInit {

  currentUser: User;
  loading = false;
  users: User[];

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
}

  ngOnInit() {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  isUserLogin(): boolean {
    if(this.currentUser) return true;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/sign/in']);
}
}
