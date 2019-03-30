import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppURLConstants } from 'src/app/models/constants/app-url-constants.model';
import { AppNavigateService } from 'src/app/route/app-navigate.service';
import { RegularExpressionHandler } from 'src/app/utils/regular-expression-handler';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss']
})
export class AppLoginComponent implements OnInit {

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

  private _generateForm(): any {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        RegularExpressionHandler.regularExpression
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  public createNewAccount(): void {
    this._appNavigate.goTo(AppURLConstants.URL.appCreateAccountComponent.key)
  }


  public getAlertForm(): boolean {
    return this._alertForm
  }

  public onSubmit(): void {
    if (
      this.loginForm.get('username').value &&
      this.loginForm.get('password').value
    ) {
      // this._appNavigate.goTo(AppURLConstants.URL.appManageMent.key)
    } else {
      this._alertForm = true
    }
  }
}
