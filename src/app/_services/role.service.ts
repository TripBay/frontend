import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subscriber , of} from 'rxjs';
import { map, tap, subscribeOn,catchError } from "rxjs/operators";

import { environment } from '@environments/environment';
import { Roles } from '@app/models';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

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

  getRole(id: number): Observable<Roles> {
    return this.http.get<Roles>(`${environment.apiUrl}/roles/${id}`).pipe(
      tap(_ => console.log('fetched role')),
      catchError(this.handleError<Roles>('getRole', []))
      );
  }
}
