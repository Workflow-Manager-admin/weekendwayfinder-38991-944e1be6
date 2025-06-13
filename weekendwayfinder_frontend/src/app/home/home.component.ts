import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// PUBLIC_INTERFACE
@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [],
  // Angular v14+ supports importing providers & Router in a standalone component.
})
/** This component renders the initial home page of WeekendWayfinder. */
export class HomeComponent {}
