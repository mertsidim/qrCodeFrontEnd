import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Service } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as config from '@environments/config';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formGroup: FormGroup;
  required = 'This field is required';
  post: any = '';
  loading = false;
  formFlag = false;
  config = config;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: Service,
    public snackBar: MatSnackBar
  ) {
    this.config = config;
  }

  ngOnInit() {
    if (this.service.getLocalStorage('authToken')) {
      this.router.navigate(['dashboard']);
    } else {
      this.formFlag = true;
      this.createForm();
    }
  }

  ngAfterViewInit(): void {
    const settings = JSON.parse(localStorage.getItem('settings'));
    if (settings) {
      settings.forEach((element: { name: string; status: boolean; }) => {
        if (element.name === 'logo.png' && element.status === true) {
          document.getElementById('authLogo').setAttribute('src', `${config.imagePath}logo.png`);
        }
      });
    }
  }
  createForm() {
    this.formGroup = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.pattern(config.emailregex)]],
      password: [null, [Validators.required, this.checkPassword]],
      confirmPassword: [null, [Validators.required]],
    }, {
      validator: this.MustMatch('password', 'confirmPassword')
    });
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.missMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }
      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ missMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  checkPassword(control: { value: any; }) {
    const enteredPassword = control.value;
    const passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { requirements: true } : null;
  }

  getErrorEmail() {
    return this.formGroup.get('email').hasError('required') ? 'This field is required' :
      this.formGroup.get('email').hasError('pattern') ? 'Enter a valid email Address' :
        this.formGroup.get('email').hasError('alreadyInUse') ? 'This email Address is already in use' : '';
  }

  getErrorPassword() {
    return this.formGroup.get('password').hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
      this.formGroup.get('password').hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
  }

  getErrorConfirmPassword() {
    return this.formGroup.get('confirmPassword').hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
      this.formGroup.get('confirmPassword').hasError('missMatch') ? 'Password do not match' : '';
  }

  onSubmit() {
    if (this.formGroup.valid) {
      this.loading = true;
      this.service.makeAPICall(this.service.postMethod, this.service.registerAPI, this.formGroup.value, (response) => {
        this.loading = false;
        if (response.code !== 0) {
          if (response.code === 200) {
            localStorage.setItem('authToken', response.authToken);
            localStorage.setItem('userInfo', JSON.stringify(response.data));
            this.router.navigate(['dashboard']);
          } else {
            config.flash(this.snackBar, response.message);
          }
        } else {
          config.flash(this.snackBar, 'Something went wrong!');
        }
      });
    }
  }
}
