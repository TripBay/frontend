import { Observable, Subscriber , of} from 'rxjs';
import { map, tap, subscribeOn,catchError } from "rxjs/operators";
import { Guest } from './guest';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const API_URL: string = 'http://tripbay-backend.herokuapp.com/api';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
  };

  constructor( private http: HttpClient ) { }

  // getUsers(): Observable<Guest[]> {
  //   let actualUrl = this.url;
  //   return this.http.get(actualUrl).map(user => user.json().data);
  // }

  private handleError<T> (operation = 'operation' , result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.messages}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);

    }
  }

  getUsers(): Observable<Guest[]> {
    return this.http.get<Guest[]>(API_URL + '/users').pipe(
      tap(_ => console.log('fetched users')),
      catchError(this.handleError<Guest[]>('getUsers', []))
      );
  }

  getUser(id: number): Observable<Guest> {
    return this.http.get<Guest>(API_URL + `/users/${id}`).pipe(
      tap(_ => console.log('fetched users'))
      );
  }

}
