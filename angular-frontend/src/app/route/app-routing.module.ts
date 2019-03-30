import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', loadChildren: 'src/app/modules/app-authentication/app-authentication.module#AppAuthenticationModule' },
];

export const AppRouting = RouterModule.forRoot(appRoutes, { useHash: true });
