import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [{
    path: "", component: HomeComponent
},
{
    path: "landing",
    component: LandingComponent
}];
