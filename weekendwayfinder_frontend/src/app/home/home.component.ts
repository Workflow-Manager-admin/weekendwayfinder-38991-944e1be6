import { Component } from '@angular/core';
import { Router } from '@angular/router';

// PUBLIC_INTERFACE
@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [],
  // Angular v14+ supports importing providers & Router in a standalone component.
})
/** This component renders the initial home page of WeekendWayfinder. */
export class HomeComponent {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly _router: Router) {}

  // PUBLIC_INTERFACE
  goToPlanner(): void {
    /** Navigate to the Trip Planner page when called. */
    this._router.navigate(['/trip-planner']);
  }

  // PUBLIC_INTERFACE
  onAISuggestions(): void {
    /** Placeholder for future AI Suggestions action. */
    // TODO: Implement AI suggestion logic in future sprint.
    console.log("AI Suggestions feature coming soon!");
  }
}
