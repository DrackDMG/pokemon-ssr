import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about-pages.component'),
  },
  {
    path: 'pricing',
    loadComponent: () => import('./pages/pricing/pricing-pages.component'),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact-pages.component'),
  },
  {
    path: 'pokemons/page/:page',
    loadComponent: () => import('./pages/pokemon/pokemon-page.component'),
  },
  {
    path: 'pokemon/:id',
    loadComponent: () => import('./pages/pokemon-page/pokemon-page.component'),
  },
  {
    path: '**',
    redirectTo: 'about',
  }
];
