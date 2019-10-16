import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { SocialLoginModule, AuthServiceConfig, LoginOpt } from "angularx-social-login";
// import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import { BookingComponent } from './booking/booking.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookingSearchComponent } from './booking/booking-search/booking-search.component';
import { MaterialModule } from './material/material.module';
import { DatepickerComponent , ExampleHeader } from './datepicker/datepicker.component';
import { ReactiveFormsModule }  from '@angular/forms';
import { FormsModule }  from '@angular/forms';
import { GuestComponent } from './guest/guest.component';
import { GuestCounterComponent } from './guest/guest-counter/guest-counter.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HotelpageComponent } from './hotelpage/hotelpage.component';
import { HomepagenavbarComponent } from './homepage/homepagenavbar/homepagenavbar.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { HomepageTopDestinationComponent } from './homepage/homepage-top-destination/homepage-top-destination.component';
import { VideoComponent } from './homepage/video/video.component';
import { HomepageRecommendationsComponent } from './homepage/homepage-recommendations/homepage-recommendations.component';
import { TopOffersComponent } from './homepage/top-offers/top-offers.component';
import { CustomerReviewsComponent } from './homepage/customer-reviews/customer-reviews.component';
import { CalendarScheduleComponent } from './calendar-schedule/calendar-schedule.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { ReviewsComponent } from './hotelpage/reviews/reviews.component';
import { OtherHotelsComponent } from './hotelpage/other-hotels/other-hotels.component';
import { HotelLocationComponent } from './hotelpage/hotel-location/hotel-location.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { LogInComponent } from './user-login/log-in/log-in.component';
import { SignUpComponent } from './user-login/sign-up/sign-up.component';
import { GuestAddMinusComponent } from './guest/guest-add-minus/guest-add-minus.component';
import { OwlModule } from 'ngx-owl-carousel';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertComponent } from './_components';

// const fbLoginOptions: LoginOpt = {
//   scope: 'pages_messaging,pages_messaging_subscriptions,email,pages_show_list,manage_pages',
//   return_scopes: true,
//   enable_profile_selector: true
// };

// const googleLoginOptions: LoginOpt = {
//   scope: 'profile email'
// };

// let config = new AuthServiceConfig([
//   {
//     id: GoogleLoginProvider.PROVIDER_ID,
//     provider: new GoogleLoginProvider("Google-OAuth-Client-Id")
//   },
//   {
//     id: FacebookLoginProvider.PROVIDER_ID,
//     provider: new FacebookLoginProvider("982476282115819")
//   }
// ]);

// export function provideConfig() {
//   return config;
// }

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    BookingSearchComponent,
    DatepickerComponent,
    DatepickerComponent,
     ExampleHeader,
     GuestComponent,
     GuestCounterComponent,
     AboutUsComponent,
     HomepageComponent,
     NavbarComponent,
     FooterComponent,
     HotelpageComponent,
     HomepagenavbarComponent,
     SearchResultsComponent,
     HomepageTopDestinationComponent,
     VideoComponent,
     HomepageRecommendationsComponent,
     TopOffersComponent,
     CustomerReviewsComponent,
     CalendarScheduleComponent,
     ReviewsComponent,
     OtherHotelsComponent,
     HotelLocationComponent,
     UserLoginComponent,
     LogInComponent,
     SignUpComponent,
     GuestAddMinusComponent,
     UserDashboardComponent,
     AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    // SocialLoginModule
    NgxDaterangepickerMd.forRoot(),
    OwlModule
  ],
  entryComponents: [
    DatepickerComponent,
    ExampleHeader
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // {
    //   provide: AuthServiceConfig,
    //   useFactory: provideConfig
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
