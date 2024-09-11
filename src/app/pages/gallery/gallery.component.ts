import { Component } from '@angular/core';
import { NavbarComponent } from "../../UI/navbar/navbar.component";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})

export class GalleryComponent {}

