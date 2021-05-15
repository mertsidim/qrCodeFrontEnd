import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Service } from '../../services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as config from '@environments/config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  config = config;
  loading = false;
  formFlag = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: Service,
    public snackBar: MatSnackBar) {
    this.config = config;
  }

  ngOnInit() {
    if (this.service.getLocalStorage('authToken')) {
      this.router.navigate(['/dashboard']);
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
      userName: new FormControl(null, Validators.required),
      password: new FormControl(null, [Validators.required, this.checkPassword])
    });
  }

  checkPassword(control: { value: any; }) {
    const enteredPassword = control.value;
    const passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { requirements: true } : null;
  }

  getErrorPassword() {
    return this.formGroup.get('password').hasError('required') ? 'This field is required' :
      this.formGroup.get('password').hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
  }

  onSubmit() {
    if (this.formGroup.valid) {
      this.loading = true;
      const userData = {
        userName: this.formGroup.controls.userName.value,
        password: this.config.encryptString(this.formGroup.controls.password.value)
      };
      this.service.makeAPICall(this.service.postMethod, this.service.loginAPI, userData, (response) => {
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
