import { async, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppAuthenticationComponent } from './modules/app-authentication/app-authentication.component';
import { AppManagementModule } from './modules/app-management/app-management.module';
import { ShareModule } from './modules/share-modules/share.module';
import { AppRouting } from './route/app-routing.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AppAuthenticationComponent
      ],
      imports: [
        AppRouting,
        AppManagementModule,
        BrowserModule,
        BrowserAnimationsModule,
        ShareModule,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
