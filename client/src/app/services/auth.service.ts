import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AppHttpService } from './app-http.service';

import { LoginModel } from '../models/login.model';
import { SignupModel } from '../models/signup.model';
import { ContactModel } from '../models/contact.model';



@Injectable()
export class AuthService {

  constructor(private appHttp: AppHttpService) { }

  registerUser(user: SignupModel) {
    return this.appHttp.post('users/signup', user)
    .map(res => res.json());
  }

  authenticateUser(user: LoginModel) {
    return this.appHttp.post('users/login', user)
    .map(res => res.json());
  }
  sendContact(contact: ContactModel) {
    return this.appHttp.post('/contact', contact)
    .map(res => res.json());
  }
}