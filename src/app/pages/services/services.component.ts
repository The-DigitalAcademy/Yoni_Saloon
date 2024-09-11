import { Component } from '@angular/core';


import { NavbarComponent } from '../../UI/navbar/navbar.component';
import { FooterComponent } from '../../UI/footer/footer.component';

@Component({
  selector: 'app-services',
  standalone: true,

  imports: [NavbarComponent, FooterComponent],

  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {}
