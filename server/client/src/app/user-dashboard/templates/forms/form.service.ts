import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  apiUrl = 'http://localhost:3000/forms';
  
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
  submitForm(userData) {
    if (this.isLoggedIn) {
    return this.http.post<any>( `${this.apiUrl}/rental`, userData).pipe(
     
      tap(contract => {
        console.log(contract);
       
      }),
      catchError(this.handleError('signUp', []))
    );
    }else {
      this.router.navigate(['/Login']);
    }
  
  }

}
