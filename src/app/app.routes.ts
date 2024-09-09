
import { ContactComponent } from './pages/contact/contact.component';


export const routes: Routes = [

  { path: '',title: "contact", component: ContactComponent},

];

import { GalleryComponent } from './pages/gallery/gallery.component';


export const routes: Routes = [
  { path: 'gallery', title: 'Gallery', component: GalleryComponent },


  
];

=======

import { HomeComponent } from './pages/home/home.component';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [{
    path: "", component: HomeComponent
},
{
    path: "landing",
    component: LandingComponent

import { ServicesComponent } from './pages/services/services.component';

export const routes: Routes = [{
path: "services",
component: ServicesComponent


}];


