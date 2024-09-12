
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { LandingComponent } from './landing/landing.component';
import { ServicesComponent } from './pages/services/services.component';
import { Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';


export const routes: Routes = [
  { path: '', title: 'landing',component: HomeComponent },
  { path: 'home',title: 'Home',component: LandingComponent },
  { path: 'gallery',title: 'Gallery', component: GalleryComponent },
  { path: 'services',title: 'Services', component: ServicesComponent },
  { path: 'contact',title: 'Contact', component: ContactComponent },
  { path: '**', title: 'Error404', component: ErrorComponent },
];
