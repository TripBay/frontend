import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HotelpageComponent } from './hotelpage/hotelpage.component';
import { SearchResultsComponent } from './search-results/search-results.component';


const routes: Routes = [
  {path: '' , component: HomepageComponent},
  {path: 'about-us' , component: AboutUsComponent},
  {path: 'hotel-page' , component: HotelpageComponent},
  {path: 'search' , component: SearchResultsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
