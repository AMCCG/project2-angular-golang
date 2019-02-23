import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMerterialModule } from 'src/app/third_party/angular-meterial/angular-merterial.module';

@NgModule({
  imports: [
    AngularMerterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    AngularMerterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ShareModule { }
