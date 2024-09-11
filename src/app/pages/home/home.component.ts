import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

}
