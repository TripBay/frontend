import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { tap, catchError } from "rxjs/operators";

import { environment } from '@environments/environment';
import { User } from '@app/models';

@Injectable({ providedIn: 'root' })
export class UserService {

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
    };

    constructor(private http: HttpClient) { }

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

    getUsers() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`).pipe(
          tap(_ => console.log('fetched users')),
          catchError(this.handleError<User[]>('getUsers', []))
          );
    }

    register(user: User) {
      return this.http.post(`${environment.apiUrl}/register`, user, this.httpOptions);
  }

    getUser(id: number): Observable<User> {
      return this.http.get<User>(`${environment.apiUrl}/users/${id}`).pipe(
        tap(_ => console.log('fetched users'))
        );
    }

}
