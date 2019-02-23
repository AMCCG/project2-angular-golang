import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', loadChildren: 'src/app/modules/app-authentication/app-authentication.module#AppAuthenticationModule' },
  { path: 'management', loadChildren: 'src/app/modules/app-management/app-management.module#AppManagementModule' },
];

export const AppRouting = RouterModule.forRoot(appRoutes, { useHash: true });
