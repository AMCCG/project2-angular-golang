import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAuthenticationComponent } from './app-authentication.component';

describe('AppAuthenticationComponent', () => {
  let component: AppAuthenticationComponent;
  let fixture: ComponentFixture<AppAuthenticationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAuthenticationComponent ]
    })
    .compileComponents();
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
