import { Component } from '@angular/core'
import { AuthenticationService, TokenPayload } from '../services/authentication.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router'

@Component({    
    templateUrl: '../views/login.html',
    styleUrls: ['../styles-views/login.css']
})

export class LoginComponent {
  public loginForm: FormGroup;

  credentials: TokenPayload = {
    id: 0,
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  }

  constructor(private location: Location, private auth: AuthenticationService, private router: Router) {}

  /*login() {
    console.log(this.credentials);
    this.auth.login(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/profile');
      },
      err => {
        console.log(err);
      }
    )
  }*/

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(20)])
    });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  public onCancel = () => {
    this.location.back();
  }

  public loginUser = (loginFormValue) => {
    if (this.loginForm.valid) {
      this.executeLoginUser(loginFormValue);
    }
  }

  private executeLoginUser = (loginFormValue) => {
    this.credentials = {
      id: 0,
      first_name: '',
      last_name: '',
      email: loginFormValue.email,
      password: loginFormValue.password
    }
 
    this.auth.login(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/profile');
      },
      err => {
        console.log(err);
      }
    )
  }
}