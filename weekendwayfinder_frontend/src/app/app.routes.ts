import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'sign-in', loadComponent: () => import('./sign-in/sign-in.component').then(m => m.SignInComponent) },
  { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: 'trip-planner', loadComponent: () => import('./trip-planner/trip-planner.component').then(m => m.TripPlannerComponent) },
  { path: '**', redirectTo: 'home' }
];
