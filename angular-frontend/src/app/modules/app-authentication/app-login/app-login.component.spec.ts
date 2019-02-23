import { Location } from "@angular/common";
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ShareModule } from '../../share-modules/share.module';
import { AppLoginComponent } from './app-login.component';

describe('AppLoginComponent', () => {
  let component: AppLoginComponent;
  let fixture: ComponentFixture<AppLoginComponent>;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };
  let mockLocation = {
    navigate: jasmine.createSpy('back')
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppLoginComponent],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: Location, useValue: mockLocation },
      ],
      imports: [
        ShareModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to /app-management when login success', () => {
    component.ngOnInit()
    component['loginForm'].get('username').setValue("apisit")
    component['loginForm'].get('password').setValue("password")
    component.onSubmit()
    fixture.detectChanges()
    expect(mockRouter.navigate).toHaveBeenCalledWith(['management']);
  });

  it('should show alert message when login failed', () => {
    component.onSubmit()
    fixture.detectChanges()
    let message = fixture.nativeElement.querySelector(".alert div").innerHTML
    expect(message).toEqual(" Your email or password were incorrect. ")
  });

  it('should redirect to /create-account when call createNewAccount() ', () => {
    component.createNewAccount()
    fixture.detectChanges()
    expect(mockRouter.navigate).toHaveBeenCalledWith(['create-account']);
  });
});
