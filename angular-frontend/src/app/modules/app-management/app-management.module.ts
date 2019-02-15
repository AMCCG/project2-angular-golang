import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from '../share-modules/share.module';
import { LayoutModule } from './app-layout/layout.module';
import { AppManagementComponent } from './app-management/app-management.component';

const routes: Routes = [
  { path: '', component: AppManagementComponent },
];

@NgModule({
  declarations: [AppManagementComponent],
  imports: [
    LayoutModule,
    RouterModule.forChild(routes),
    ShareModule,
  ]
})
export class AppManagementModule { }
