import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularMerterialModule } from 'src/app/third_party/angular-meterial/angular-merterial.module';

@NgModule({
  imports: [
    AngularMerterialModule,
    CommonModule,
    FormsModule,
  ],
  exports: [
    AngularMerterialModule,
    CommonModule,
    FormsModule
  ]
})
export class ShareModule { }
