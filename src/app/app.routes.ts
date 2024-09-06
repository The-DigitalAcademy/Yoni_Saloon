import { Routes } from '@angular/router';

import { GalleryComponent } from './pages/gallery/gallery.component';


export const routes: Routes = [
  { path: 'gallery', title: 'Gallery', component: GalleryComponent },


  
];

import { ServicesComponent } from './pages/services/services.component';

export const routes: Routes = [{
path: "services",
component: ServicesComponent


}];

