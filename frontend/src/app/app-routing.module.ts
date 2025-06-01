import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './news/news.component';
import { BookingsComponent } from './bookings/bookings.component';
import { FeesComponent } from './fees/fees.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { FacilityComponent } from './facilities/facility/facility.component';
import { ContactComponent } from './contact/contact.component';
import { AuthComponent } from './auth/auth.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NewsItemComponent } from './news/news-item/news-item.component';
import { CheckoutComponent } from './bookings/checkout/checkout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { MybookingsComponent } from './bookings/mybookings/mybookings.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },    
    { path: 'noticias', component: NewsComponent },
    { path: 'noticias/:id', component: NewsItemComponent },    
    { path: 'reservas', canActivate: [AuthGuardService], component: BookingsComponent },    
    { path: 'reservas/success', canActivate: [AuthGuardService], component: BookingsComponent },
    { path: 'reservas/checkout', canActivate: [AuthGuardService], component: CheckoutComponent },    
    { path: 'tarifas', component: FeesComponent },
    { path: 'instalaciones', component: FacilitiesComponent },
    { path: 'instalaciones/:id', component: FacilityComponent },    
    { path: 'contacto', component: ContactComponent },
    { path: 'perfil-usuario', canActivate: [AuthGuardService], component: UserProfileComponent },
    { path: 'perfil-usuario/mis-reservas', canActivate: [AuthGuardService], component: MybookingsComponent },
    { path: 'auth', component: AuthComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'not-found' }    
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)  
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}