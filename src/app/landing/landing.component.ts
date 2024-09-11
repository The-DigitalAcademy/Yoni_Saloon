import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from "../UI/navbar/navbar.component";
import { FooterComponent } from '../UI/footer/footer.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NavbarComponent, FooterComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
