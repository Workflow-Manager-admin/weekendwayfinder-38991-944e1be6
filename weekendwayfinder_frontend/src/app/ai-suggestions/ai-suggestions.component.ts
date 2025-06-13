import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// PUBLIC_INTERFACE
@Component({
  standalone: true,
  selector: 'app-ai-suggestions',
  imports: [CommonModule],
  templateUrl: './ai-suggestions.component.html',
  styleUrl: './ai-suggestions.component.css'
})
/** Displays a placeholder AI Suggestions page for WeekendWayfinder. */
export class AiSuggestionsComponent {}
