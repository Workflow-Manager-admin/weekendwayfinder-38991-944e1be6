import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * This component renders the Trip Planner UI and 
 * displays visually styled AI trip suggestions as a list. 
 */
@Component({
  standalone: true,
  selector: 'app-trip-planner',
  imports: [CommonModule],
  templateUrl: './trip-planner.component.html',
  styleUrl: './trip-planner.component.css'
})
/** This is a container for trip planning and dynamic suggestions. */
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
