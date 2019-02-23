import { Location } from "@angular/common";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppURLConstants } from '../models/constants/app-url-constants.model';

@Injectable({
  providedIn: 'root'
})
export class AppNavigateService {

  constructor(
    private _location: Location,
    private _router: Router,
  ) { }

  public goTo(url: string): void {
    let navigate = '';
    switch (url) {
      case AppURLConstants.URL.appAuthentication.key:
        navigate = AppURLConstants.URL.appAuthentication.path
        break
      case AppURLConstants.URL.appManageMent.key:
        navigate = AppURLConstants.URL.appManageMent.path
        break
      case AppURLConstants.URL.appCreateAccountComponent.key:
        navigate = AppURLConstants.URL.appCreateAccountComponent.path
        break
      default:
        break
    }
    this._router.navigate([navigate]);
  }

  /**
   * Navigate to context-root.
   */
  public mainPage(): void {
    this.goTo('');
  }

  /**
   * Navigate to previous page.
   */
  public previousPage(): void {
    this._location.back();
  }


}
