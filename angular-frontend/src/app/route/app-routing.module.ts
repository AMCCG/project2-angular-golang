import { RouterModule, Routes } from '@angular/router';
import { AppAuthenticationComponent } from '../modules/app-authentication/app-authentication.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'management', loadChildren: 'src/app/modules/app-management/app-management.module#AppManagementModule' },
  { path: 'login', component: AppAuthenticationComponent },
];

export const AppRouting = RouterModule.forRoot(appRoutes, { useHash: true });
