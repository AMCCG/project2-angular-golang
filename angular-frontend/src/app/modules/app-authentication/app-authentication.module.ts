import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from '../share-modules/share.module';
import { AppAuthenticationComponent } from './app-authentication.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppRegisterComponent } from './app-register/app-register.component';
import { SelectDirective } from './directives/select.directive';
import { ValidateInputDirective } from './directives/validate-input.directive';

const routes: Routes = [

  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: '', component: AppAuthenticationComponent, children: [
      { path: 'login', component: AppLoginComponent },
      { path: 'create-account', component: AppRegisterComponent },
    ],
  },
];

@NgModule({
  declarations: [
    AppAuthenticationComponent,
    AppLoginComponent,
    AppRegisterComponent,
    SelectDirective,
    ValidateInputDirective,
  ],
  imports: [
    RouterModule.forChild(routes),
    ShareModule,
  ]
})
export class AppAuthenticationModule { }
