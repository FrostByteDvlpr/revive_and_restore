import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('../home/home').then((m) => m.HomeComponent),
  },
  {
    path: 'services',
    loadComponent: () =>
      import('../services/services').then((m) => m.ServicesComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('../contact/contact').then((m) => m.ContactComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('../about/about').then((m) => m.AboutComponent),
  },
  {
    path: 'gallery',
    loadComponent: () =>
      import('../gallery/gallery').then((m) => m.GalleryComponent),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
