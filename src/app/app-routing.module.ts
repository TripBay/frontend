import { SignUpComponent } from './user-login/sign-up/sign-up.component';
import { LogInComponent } from './user-login/log-in/log-in.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HotelpageComponent } from './hotelpage/hotelpage.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { UserLoginComponent } from './user-login/user-login.component';


const routes: Routes = [
  {path: '' , component: HomepageComponent},
  {path: 'about-us' , component: AboutUsComponent},
  {path: 'hotel-page' , component: HotelpageComponent},
  {path: 'search' , component: SearchResultsComponent},
  {path: 'sign', component: UserLoginComponent,
        children: [
          {path: 'in', component: LogInComponent},
          {path: 'up', component: SignUpComponent}
        ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
