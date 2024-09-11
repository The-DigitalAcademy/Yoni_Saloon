import { Component } from '@angular/core';


import { NavbarComponent } from '../../UI/navbar/navbar.component';
import { FooterComponent } from '../../UI/footer/footer.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,

  imports: [NavbarComponent, FooterComponent, RouterLink, RouterLinkActive],

  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {}
