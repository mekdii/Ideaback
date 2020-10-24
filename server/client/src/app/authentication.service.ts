import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable , of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  apiUrl = 'api/users';


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  constructor(private http: HttpClient, private router: Router) { }

  signUp(formData: NgForm) {
    return this.http.post<any>( `${this.apiUrl}/signUp`, formData).pipe(
      tap(user => {
        console.log(user);
      }),
      catchError(this.handleError('signUp', []))
    );
  }

  logIn(formData: NgForm) {
    return this.http.post<any>( `${this.apiUrl}/logIn`, formData).pipe(
      tap(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

      }),
      catchError(this.handleError('logIn', []))
    );
  }

  logout() {
    if (localStorage.getItem('currentUser')) {
      localStorage.removeItem('currentUser');
      this.router.navigate(['/home']);
    }
  }

  isloggedIn() {
    if (localStorage.getItem('currentUser')) {
      return true;
    } else {
      return false;
    }
  }

  getUser() {
    if (this.isloggedIn) {
      return JSON.parse(localStorage.getItem('currentUser'));
    }
  }

}