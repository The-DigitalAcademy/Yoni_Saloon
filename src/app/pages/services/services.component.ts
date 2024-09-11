import { Component } from '@angular/core';


import { NavbarComponent } from '../../UI/navbar/navbar.component';

@Component({
  selector: 'app-services',
  standalone: true,

  imports: [NavbarComponent],

  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {}
