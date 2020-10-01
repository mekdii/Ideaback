import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service'
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
    this.login = this.getLogin();
    this.loginForm = this.fb.group({
      'email' : [null, [Validators.required, Validators.email]],
      'password' : [null, Validators.required],
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/' ;
  }
  
getLogin(){

  return this.config.getConfig().login
};

logIn(formData: NgForm) {
  return this.auth.logIn(formData).subscribe(
    (user) => {
      console.log(user);
      this.router.navigate([this.returnUrl]);
    });
}

}
