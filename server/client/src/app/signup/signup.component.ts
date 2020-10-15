import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';
import {SignupModel} from '../models/signup.model';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ValidateService } from '../services/validate.service';


import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  user: SignupModel = new SignupModel();
  signupForm: FormGroup;
  returnUrl: string;


  constructor(private config: ConfigService,
    
    private validateService: ValidateService,
    private fb: FormBuilder,
   private authService:AuthService,
    private router: Router,
  
    ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      'firstName': [this.user.firstName, [
        Validators.required
      ]],
      'lastName': [this.user.lastName, [
        Validators.required
      ]],
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
  onSignupSubmit() {
  
    alert(this.user.firstName + ' ' + this.user.lastName + ' ' + this.user.email + ' ' + this.user.password);

  }
}
