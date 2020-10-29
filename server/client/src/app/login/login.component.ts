import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';
import {LoginModel} from '../models/login.model'
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: LoginModel = new LoginModel();
  loginForm: FormGroup;
  returnUrl: String;


login = {
  title: '',
  btnText: '',
  link: '',
  block: []
}
  constructor(private config:ConfigService,
    private fb: FormBuilder,
    private auth: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      'email': [this.user.email, [
        Validators.required,
        Validators.email
      ]],
      'password': [this.user.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15)
      ]]
    });
  }

  
  get password() {
    return this.loginForm.get('password');
  }
  get email() {
    return this.loginForm.get('email');
  }
  
  onLoginSubmit() {
   //alert(this.user.email + ' ' + this.user.password);
   console.log(this.loginForm.value);
   this.auth.logIn(this.loginForm.value)
     .subscribe(
       response => 
      {  if (response.token) {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/Dashboard']);
      }else {
        console.log('Failed');
      } }
     );
    }

}
