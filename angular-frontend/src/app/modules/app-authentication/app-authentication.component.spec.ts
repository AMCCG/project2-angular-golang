import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRouting } from 'src/app/route/app-routing.module';
import { ShareModule } from '../share-modules/share.module';
import { AppAuthenticationComponent } from './app-authentication.component';
import { AppCreateAccountComponent } from './app-create-account/app-create-account.component';
import { AppLoginComponent } from './app-login/app-login.component';

describe('AppAuthenticationComponent', () => {
  let component: AppAuthenticationComponent;
  let fixture: ComponentFixture<AppAuthenticationComponent>;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };
  let mockLocation = {
    navigate: jasmine.createSpy('back')
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppAuthenticationComponent,
        AppCreateAccountComponent,
        AppLoginComponent],
      imports: [
        AppRouting,
        ShareModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



});
