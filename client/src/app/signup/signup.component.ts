import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service'
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  returnUrl: string;

signup ={
  title: '',
        btnText: '',
        link: '',
        block: []
}
  constructor(private config: ConfigService,
    private fb: FormBuilder,
    private auth: AuthenticationService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.signup =this.getSignup();
    this.signupForm = this.fb.group({
      'firstName':  [null, Validators.required],
      'lastName':  [null, Validators.required],
      'email' : [null, [Validators.required, Validators.email]],
      'password' : [null, Validators.required],
    });
  }
getSignup(){
  return this.config.getConfig().signup
}
signUp(formData: NgForm) {
  return this.auth.signUp(formData).subscribe(
    (user) => {
      console.log(`added user ${user}`);
      this.router.navigate(['Login']);
    });
}
}
