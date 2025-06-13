import { Component } from '@angular/core';

/**
 * This component renders the Trip Planner UI and 
 * displays visually styled AI trip suggestions as a list. 
 */
@Component({
  standalone: true,
  selector: 'app-trip-planner',
  templateUrl: './trip-planner.component.html',
  styleUrl: './trip-planner.component.css'
})
/** This is a container for trip planning and dynamic suggestions. */
export class TripPlannerComponent {
  /**
   * AI-generated trip suggestions to display as cards.
   * In future, this array will be dynamically populated via AI integration.
   */
  aiSuggestions = [
    {
      title: 'Beachside Bliss',
      description: 'A relaxing weekend at Sand Cove Beach with yoga at sunrise and local seafood dinner.',
    },
    {
      title: 'Mountain Adventure',
      description: 'Hike Pine Ridge trail, experience ziplining, and unwind at a cozy cabin.',
    },
    {
      title: 'Cultural Exploration',
      description: 'Visit the city’s Museum of Art followed by a street food tasting walk downtown.',
    }
  ];
}
