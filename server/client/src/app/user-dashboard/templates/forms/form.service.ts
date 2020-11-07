import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Rental } from './rental';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  apiUrl = 'http://localhost:3000/forms';

  private handleError<T>(operation = 'operation', result?: T) {
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

    return this.http.post<any>(`${this.apiUrl}/rental`, userData).pipe(

      tap(contract => {
        console.log(contract);

      }),
      catchError(this.handleError('rental', []))
    );
  }


  getForm(): Observable<any> {
    const url = `${this.apiUrl}/rental`;
    return this.http.get<any>(url).pipe(
      tap(_ => console.log(`fetched post `)),
      catchError(this.handleError<any>(`getPost`))
    );
  }
  getContract(id: any): Observable<any> {
    const url = `${this.apiUrl}/rental/${id}`;
    return this.http.get<any>(url).pipe(
      tap(_ => console.log(`fetched contract by id=${id}`)),
      catchError(this.handleError<any>(`getContract id=${id}`))
    );
  }

  updateContract(id: any, rental: Rental): Observable<any> {
    const url = `${this.apiUrl}/rental/${id}`;
    return this.http.put(url, rental).pipe(
      tap(_ => console.log(`updated contract id=${id}`)),
      catchError(this.handleError<any>('updateContract'))
    );
  }

deleteContract(id: any): Observable<any>{
  const url = `${this.apiUrl}/rental/${id}`;
    return this.http.delete<any>(url).pipe(
      tap(_ => console.log(`deleted contract id=${id}`)),
      catchError(this.handleError<any>('deleteContract'))
    );
}
}
