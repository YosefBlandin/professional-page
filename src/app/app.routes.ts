import { Routes } from '@angular/router';
import { sessionGuard } from '@auth/guards/session/session.guard';

export const APP_ROUTES: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: 'admin',
    canActivate: [sessionGuard],
    loadChildren: () => import('./admin/admin.routes').then((m) => m.ADMIN_ROUTES),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth',
  },
];
