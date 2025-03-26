import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout/default-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./public/public.routes').then((m) => m.publicRoutes),
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.routes').then((m) => m.authRoutes),
      },
      {
        path: 'organizational',
        loadChildren: () =>
          import('./organizational/organizational.routes').then((m) => m.organizationalRoutes),
      },
      {
        path: 'public',
        loadChildren: () => import('./public/public.routes').then((m) => m.publicRoutes),
      },
      {
        path: 'user',
        loadChildren: () => import('./user/user.routes').then((m) => m.userRoutes),
      },
    ],
  },

  {
    path: '**',
    redirectTo: '/home',
  },
];
