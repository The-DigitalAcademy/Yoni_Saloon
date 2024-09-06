import { Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';


export const routes: Routes = [

  { path: '',title: "contact", component: ContactComponent},

];

import { GalleryComponent } from './pages/gallery/gallery.component';


export const routes: Routes = [
  { path: 'gallery', title: 'Gallery', component: GalleryComponent },


  
];

import { ServicesComponent } from './pages/services/services.component';

export const routes: Routes = [{
path: "services",
component: ServicesComponent


}];


