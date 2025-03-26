import { Routes } from '@angular/router';

export const organizationalRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'panel',
      },
      {
        path: 'panel',
        loadComponent: () =>
          import('./admin/admin-panel/admin-panel.component').then((m) => m.AdminPanelComponent),
      },
    ],
  },
  {
    path: 'users',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'see-users',
      },
      {
        path: 'see-users',
        loadComponent: () =>
          import('./users/see-users/see-users.component').then((m) => m.SeeUsersComponent),
      },
      {
        path: 'create-users',
        loadComponent: () =>
          import('./users/create-users/create-users.component').then((m) => m.CreateUsersComponent),
      },
    ],
  },
];
