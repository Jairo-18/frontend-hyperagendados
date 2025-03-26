import { Routes } from '@angular/router';

export const authRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then((m) => m.LoginComponent),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./pages/register/register.component').then((m) => m.RegisterComponent),
      },
      {
        path: 'recovery-password',
        loadComponent: () =>
          import('./pages/recovery-password/recovery-password.component').then(
            // eslint-disable-next-line comma-dangle
            (m) => m.RecoveryPasswordComponent
          ),
      },
    ],
  },
];
