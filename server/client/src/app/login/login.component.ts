import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';
import {LoginModel} from '../models/login.model'
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
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
    private authService: AuthService,
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
  
  onLoginSubmit() {
   alert(this.user.email + ' ' + this.user.password);

  }
}
