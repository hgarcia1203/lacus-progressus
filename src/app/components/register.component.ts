import { Component } from "@angular/core";
import { AuthenticationService, TokenPayload } from "../services/authentication.service";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from "@angular/router";

@Component({
    templateUrl: "../views/register.html",
    styleUrls: ['../styles-views/register.css']
})

export class RegisterComponent {
  public registerForm: FormGroup;

  credentials: TokenPayload = {
    id: 0,
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  };

  constructor(private location: Location, private auth: AuthenticationService, private router: Router) {}

  /*register() {
    this.auth.register(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl("/profile");
      },
      err => {
        console.log(err);
      }
    );
  }*/

  ngOnInit() {
    this.registerForm = new FormGroup({
      first_name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      last_name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      email: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(15)])
    });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.registerForm.controls[controlName].hasError(errorName);
  }

  public onCancel = () => {
    this.location.back();
  }

  public registerUser = (registerFormValue) => {
    if (this.registerForm.valid) {
      this.executeRegisterUser(registerFormValue);
    }
  }

  private executeRegisterUser = (registerFormValue) => {
    this.credentials = {
      id: 0,
      first_name: registerFormValue.first_name,
      last_name: registerFormValue.last_name,
      email: registerFormValue.email,
      password: registerFormValue.password
    }
 
    this.auth.register(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl("/profile");
      },
      err => {
        console.log(err);
      }
    )
  }
}