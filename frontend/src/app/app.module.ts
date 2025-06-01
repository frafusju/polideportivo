import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from  '@angular/forms';
import { HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { registerLocaleData } from '@angular/common';
import  localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs);


import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { NewsItemComponent } from './news/news-item/news-item.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FeesComponent } from './fees/fees.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { FacilityComponent } from './facilities/facility/facility.component';
import { ContactComponent } from './contact/contact.component';
import { BookingsComponent } from './bookings/bookings.component';
import { DniValidatorDirective } from './shared/dni-validator.directive';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CheckoutComponent } from './bookings/checkout/checkout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AppRoutingModule } from './app-routing.module';
import { DateValidatorDirective } from './bookings/date-validator.directive';
import { TimesValidatorDirective } from './bookings/times-validator.directive';
import { HomeComponent } from './home/home.component';
import { MybookingsComponent } from './bookings/mybookings/mybookings.component';

@NgModule({
  declarations: [
    AppComponent,    
    NewsComponent,    
    AuthComponent,
    FeesComponent,
    FacilitiesComponent,
    ContactComponent,
    BookingsComponent,
    HeaderComponent,
    DniValidatorDirective,
    DateValidatorDirective,
    TimesValidatorDirective,    
    FacilityComponent,
    UserProfileComponent,
    NewsItemComponent,
    FooterComponent,
    CheckoutComponent,
    NotFoundComponent,
    HomeComponent,
    MybookingsComponent,    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN'
    }),
    FontAwesomeModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },    
    { provide: LOCALE_ID, useValue: 'es-ES' },
    AuthService,
    AuthGuardService,],    
  bootstrap: [AppComponent]
})
export class AppModule { }