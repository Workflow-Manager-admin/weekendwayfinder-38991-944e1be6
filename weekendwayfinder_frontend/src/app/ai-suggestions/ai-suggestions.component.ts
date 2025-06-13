import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Displays actual AI suggestions for WeekendWayfinder.
 */
// PUBLIC_INTERFACE
@Component({
  standalone: true,
  selector: 'app-ai-suggestions',
  imports: [CommonModule],
  templateUrl: './ai-suggestions.component.html',
  styleUrl: './ai-suggestions.component.css'
})
export class AiSuggestionsComponent {
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
    },
    {
      title: 'Romantic Lakeside Escape',
      description: 'Enjoy a couple’s boat ride on Willow Lake, sunset picnic, and stargazing.',
    },
    {
      title: 'Family Theme Park Fun',
      description: 'Spend quality time riding coasters, exploring water slides, and visiting a local candy factory.',
    },
    {
      title: 'Solo Mindfulness Retreat',
      description: 'Disconnect for a mindful forest retreat with meditation and nature journaling.',
    },
    {
      title: 'Nature Photography Adventure',
      description: 'Snap wildlife photos at Green Valley Reserve and join a guided nature walk.',
    },
    {
      title: 'Street Food Trail',
      description: 'Follow an AI-crafted food tour sampling local specialties from popular food stalls.',
    },
    {
      title: 'Spiritual Journey',
      description: 'Unwind with a visit to Sapphire Temple, a guided mindfulness session, and organic brunch.',
    },
    {
      title: 'Luxury Daycation',
      description: 'Indulge in a 5-star spa, infinity pool, and private cabana lunch.',
    },
    {
      title: 'Wildlife Safari',
      description: 'Set out on a wildlife drive, watch elephants and tigers, and picnic under ancient banyan trees.',
    },
    {
      title: 'Offbeat Village Exploration',
      description: 'Wander through rustic artisan villages, meet local craftsmen, and explore hidden trails.',
    }
  ];
}
