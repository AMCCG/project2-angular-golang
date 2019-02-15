import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserDialogComponent } from './header/user-dialog/user-dialog.component';
import { ShareModule } from '../../share-modules/share.module';

@NgModule({
  declarations: [
    HeaderComponent,
    UserDialogComponent,
  ],
  imports: [
    ShareModule
  ],
  entryComponents: [UserDialogComponent],
  exports: [
    HeaderComponent,
  ]
})
export class LayoutModule { }
