import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * This component renders the Trip Planner UI,
 * allowing users to input trip preferences.
 */
@Component({
  standalone: true,
  selector: 'app-trip-planner',
  imports: [CommonModule],
  templateUrl: './trip-planner.component.html',
  styleUrl: './trip-planner.component.css'
})
/** This is a container for trip planning and user preferences. */
export class TripPlannerComponent {
  /**
   * The available mood options for planning the trip.
   * Users can select from a diverse set of moods.
   */
  moods: { label: string, value: string }[] = [
    { label: 'Relaxing', value: 'relaxing' },
    { label: 'Adventurous', value: 'adventurous' },
    { label: 'Cultural', value: 'cultural' },
    { label: 'Romantic', value: 'romantic' },
    { label: 'Family', value: 'family' },
    { label: 'Solo', value: 'solo' },
    { label: 'Nature', value: 'nature' },
    { label: 'Food', value: 'food' },
    { label: 'Spiritual', value: 'spiritual' },
    { label: 'Luxury', value: 'luxury' },
    { label: 'Wildlife', value: 'wildlife' },
    { label: 'Offbeat', value: 'offbeat' }
  ];
}
