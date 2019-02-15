import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../../share-modules/share.module';
import { LayoutModule } from '../app-layout/layout.module';
import { AppManagementComponent } from './app-management.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('AppManagementComponent', () => {
  let component: AppManagementComponent;
  let fixture: ComponentFixture<AppManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppManagementComponent ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        LayoutModule,
        RouterModule,
        ShareModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
