import { Location } from "@angular/common";
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ShareModule } from '../../share-modules/share.module';
import { AppCreateAccountComponent } from './app-create-account.component';


describe('AppCreateAccountComponent', () => {
  let component: AppCreateAccountComponent;
  let fixture: ComponentFixture<AppCreateAccountComponent>;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };
  let mockLocation = {
    navigate: jasmine.createSpy('back')
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppCreateAccountComponent],
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
    fixture = TestBed.createComponent(AppCreateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to /login when register success', () => {
    component.ngOnInit()
    component['registerForm'].get('username').setValue("apisit")
    component['registerForm'].get('password').setValue("password")
    component.onSubmit()
    fixture.detectChanges()
    expect(mockRouter.navigate).toHaveBeenCalledWith(['login']);
  });

  it('should show alert message when register failed', () => {
    component.onSubmit()
    fixture.detectChanges()
    let message = fixture.nativeElement.querySelector(".alert div").innerHTML
    expect(message).toEqual(" Your email or password were incorrect. ")
  });

  it('should redirect to /login when call goToLogin() ', () => {
    component.goToLogin()
    fixture.detectChanges()
    expect(mockRouter.navigate).toHaveBeenCalledWith(['login']);
  });

});
