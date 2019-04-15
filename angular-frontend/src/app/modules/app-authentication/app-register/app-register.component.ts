import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterModel } from 'src/app/models/register.model';

@Component({
  selector: 'app-app-register',
  templateUrl: './app-register.component.html',
  styleUrls: ['./app-register.component.scss']
})
export class AppRegisterComponent implements OnInit {

  public registerForm: FormGroup
  public month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  public day = []
  public year = []

  private dob_D
  private dob_M
  private dob_Y

  @ViewChild('dob') dob: ElementRef

  constructor() {
    for (let i = 1990; i < 2020; i++) {
      this.year.push(i)
    }
    for (let i = 1; i < 32; i++) {
      this.day.push(i)
    }
  }

  ngOnInit() {
    this._generateForm()

  }

  private _generateForm(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, this.forbiddenNameValidator]),
      password: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
    })
  }

  public setMonth(month): void {
    this.dob_M = month
  }

  public setYear(year): void {
    this.dob_Y = year
  }

  public setDate(date): void {
    this.dob_D = date
  }

  public forbiddenNameValidator(control: AbstractControl): { [key: string]: any } | null {
    if (control.value == "email") {
      return { 'duplicated': true }
    }
    return null
  }

  public onSubmit(): void {
    this.registerForm.get('email').setValue("99")
    let registerModel: RegisterModel = new RegisterModel()
    registerModel.email = this.registerForm.get('email').value
    registerModel.password = this.registerForm.get('password').value
    registerModel.firstname = this.registerForm.get('firstName').value
    registerModel.lastname = this.registerForm.get('lastName').value
    let currentTime = new Date()
    currentTime.setDate(this.dob_D)
    currentTime.setMonth(this.dob_M)
    currentTime.setFullYear(this.dob_Y)
    currentTime.setTime(currentTime.getTime())
    registerModel.dob = currentTime
    console.log(registerModel)
  }
}
