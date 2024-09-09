import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Import Router for navigation

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  // Inject the Router in the constructor
  constructor(private router: Router) { }

  // Method to navigate to the landing page
  goToLanding() {
    this.router.navigate(['/landing']);  // Adjust the route path to match your app's route
  }
}
