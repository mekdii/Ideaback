import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';
import {SignupModel} from '../models/signup.model';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ValidateService } from '../services/validate.service';

import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  user: SignupModel = new SignupModel();
  signupForm: FormGroup;
  returnUrl: string;

signup ={
  title: '',
        btnText: '',
        link: '',
        block: []
}
  constructor(private config: ConfigService,
    
    private validateService: ValidateService,
    private fb: FormBuilder,
    private auth: AuthenticationService,
    private router: Router,
  
    ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
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
  get firstName() {
    return this.signupForm.get('firstName');
  }
  get lastName() {
    return this.signupForm.get('lastName');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get password() {
    return this.signupForm.get('password');
  }
  
  onSignupSubmit() {
   
   
    console.log(this.signupForm.value);
    this.auth.signUp(this.signupForm.value)
      .subscribe(
        response =>
        { if (response.success) {
          console.log('Success!', response),
          this.router.navigate(['/Login']);
        } else {
          console.log('Failed');
        } 
      }
      );
  }
}
