import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppURLConstants } from 'src/app/models/constants/app-url-constants.model';
import { AppNavigateService } from 'src/app/route/app-navigate.service';

@Component({
  selector: 'app-app-authentication',
  templateUrl: './app-authentication.component.html',
  styleUrls: ['./app-authentication.component.scss']
})
export class AppAuthenticationComponent implements OnInit {

  // variable
  private _alertForm: boolean = false;

  public loginForm: FormGroup

  constructor(
    private _appNavigate: AppNavigateService
  ) {
    this._generateForm()
  }

  ngOnInit() {
  }

  private _regularExpression(control: AbstractControl): { [key: string]: boolean } | null {
    var regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?ก-ฮ]/
    if (control.value.match(regex) || control.value.length > 30) {
      return { regex: true }
    }
    return null
  }

  private _generateForm(): any {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        this._regularExpression
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  public getAlertForm(): boolean {
    return this._alertForm
  }

  public onSubmit(): void {
    if (
      this.loginForm.get('username').value &&
      this.loginForm.get('password').value
    ) {
      this._appNavigate.goTo(AppURLConstants.URL.appManageMent.key)
    } else {
      this._alertForm = true
      console.error("", this._alertForm)
    }
  }

}
