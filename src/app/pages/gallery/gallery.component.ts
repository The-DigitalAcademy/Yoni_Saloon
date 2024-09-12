import { Component } from '@angular/core';
import { NavbarComponent } from "../../UI/navbar/navbar.component";
import { FooterComponent } from '../../UI/footer/footer.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})

export class GalleryComponent {}

