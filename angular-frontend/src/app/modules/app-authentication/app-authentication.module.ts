import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from '../share-modules/share.module';
import { AppAuthenticationComponent } from './app-authentication.component';
import { AppCreateAccountComponent } from './app-create-account/app-create-account.component';
import { AppLoginComponent } from './app-login/app-login.component';

const routes: Routes = [

  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: '', component: AppAuthenticationComponent, children: [
      { path: 'login', component: AppLoginComponent },
      { path: 'create-account', component: AppCreateAccountComponent },
    ]
  },
];

@NgModule({
  declarations: [
    AppAuthenticationComponent,
    AppCreateAccountComponent,
    AppLoginComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    ShareModule,
  ]
})
export class AppAuthenticationModule { }
