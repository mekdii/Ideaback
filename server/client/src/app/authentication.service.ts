import { EventEmitter, Injectable, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable , of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  apiUrl = 'http://localhost:3000/users';


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  @Output() isLoggedIn: EventEmitter<any> = new EventEmitter();
  loggedInStatus = false;
  redirectUrl: string;
  constructor(private http: HttpClient, private router: Router) { }

  signUp(userData) {
    return this.http.post<any>( `${this.apiUrl}/signup`, userData).pipe(
      tap(user => {
        console.log(user);
      }),
      catchError(this.handleError('signUp', []))
    );
  }

  logIn(userData) {
    return this.http.post<any>( `${this.apiUrl}/login`, userData).pipe(
      tap(_ => {
        this.doLogin(userData);
        this.isLoggedIn.emit(true);
        this.loggedInStatus = true;
      }),
      catchError(this.handleError('login', []))
    );
  }
  doLogin(user: any) {
    localStorage.setItem('currentUser', JSON.stringify(user));
}
 
getCurrentUser() {
  if (this.isloggedIn) {
    return JSON.parse(localStorage.getItem('currentUser'));
  }
}

getDecodeToken(token: string) {
  return jwt_decode(token);
}

  isloggedIn() {
    const currentUser = this.getCurrentUser();
    if (currentUser) {
      const token = this.getDecodeToken(currentUser.token);
      const currentTime = Math.round((new Date()).getTime() / 1000);
      if (token.exp > currentTime) {
        return true;
      } else {
        this.logout();
      }
    }
    return false;
    }

    logout() {
      if (localStorage.getItem('currentUser')) {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/Home']);
      }
    }

}