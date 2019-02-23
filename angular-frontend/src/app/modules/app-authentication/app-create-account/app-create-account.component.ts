import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppURLConstants } from 'src/app/models/constants/app-url-constants.model';
import { AppNavigateService } from 'src/app/route/app-navigate.service';
import { RegularExpressionHandler } from 'src/app/utils/regular-expression-handler';

@Component({
  selector: 'app-app-create-account',
  templateUrl: './app-create-account.component.html',
  styleUrls: ['./app-create-account.component.scss']
})
export class AppCreateAccountComponent implements OnInit {

  // variable
  private _alertForm: boolean = false;


  public registerForm: FormGroup

  constructor(
    private _appNavigate: AppNavigateService
  ) { }

  ngOnInit() {
    this._generateForm()
  }

  private _generateForm(): any {
    this.registerForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        RegularExpressionHandler.regularExpression
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  public getAlertForm(): boolean {
    return this._alertForm
  }

  public goToLogin(): void {
    this._appNavigate.goTo(AppURLConstants.URL.appAuthentication.key)
  }

  public onSubmit(): void {
    if (
      this.registerForm.get('username').value &&
      this.registerForm.get('password').value
    ) {
      this._appNavigate.goTo(AppURLConstants.URL.appAuthentication.key)
    } else {
      this._alertForm = true
    }
  }

}
