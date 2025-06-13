import { Component } from '@angular/core';

// PUBLIC_INTERFACE
@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
/** This component renders the initial home page of WeekendWayfinder. */
export class HomeComponent {
  // The goToPlanner method will be implemented with router navigation when used in template context.
  goToPlanner(): void {
    // Navigation stub (actual logic handled by template binding or through template routerLink).
  }
}
