import { Routes } from '@angular/router';
import { LandingPage } from './features/landing/landing.page';

export const routes: Routes = [
  { 
    path: '', 
    component: LandingPage 
  },

  {
    path: 'products',
    loadComponent: () =>
      import('./features/products/products').then(m => m.Products)
  }
];