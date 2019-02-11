import { Injectable } from '@angular/core';
import { Router, UrlHandlingStrategy } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseServiceUrl, DevServiceUrl, PhpServiceUrl, UsersUrl } from '../serviceUrls';

import { User } from './user';
import { MessageService } from '../messages/message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private serviceUrl = '';
  lastUserId = 0;

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private router: Router
  ) {
    let url: string = window.location.href;
    if (url.search(/localhost/) >= 0) {
      this.serviceUrl = DevServiceUrl + PhpServiceUrl + UsersUrl;
    } else {
      this.serviceUrl = BaseServiceUrl + PhpServiceUrl + UsersUrl;
    }
  }

  getUser(id: number): Observable<User> {
    // this.messageService.add(`UserService: fetched user id = ${id}`);
    // return of(USERS.find(user => user.id === id));

    this.lastUserId = id;
    const url = `${this.serviceUrl}/${id}`;
    return this.http.get<User>(url).pipe(
      retry(3),
      // tap(_ => this.log(`fetched user id=${id}`)),
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  getUsers(): Observable<User[]> {
    // this.messageService.add('UserService: fetched users');
    // return of(USERS);
    return this.http.get<User[]>(this.serviceUrl)
      .pipe(
        retry(3),
        // tap(users => this.log('fetched users')),
        catchError(this.handleError('getUsers', []))
      );
  }

  /** PUT: update the user on the server */
  updateUser(user: User): Observable<any> {
    const id = user.userid;
    const url = `${this.serviceUrl}/${id}`;
    return this.http.put(url, user, httpOptions).pipe(
      retry(3),
      tap(_ => this.log(`updated user id=${user.userid}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  /** POST: add a new user to the server */
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.serviceUrl, user, httpOptions).pipe(
      tap((_user: User) => this.log(`added user w/ id=${_user.userid}`)),
      catchError(this.handleError<User>('addUser'))
    );
  }

  /** DELETE: delete the user from the server */
  deleteUser(user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.userid;
    const url = `${this.serviceUrl}/${id}`;

    return this.http.delete<User>(url, httpOptions).pipe(
      retry(3),
      tap(_ => this.log(`deleted user id=${id}`)),
      catchError(this.handleError<User>('deleteUser'))
    );
  }

  /** GET users whose name contains search term */
  searchUsers(term: string): Observable<User[]> {
    if (!term.trim()) {
      // if not search term, return empty user array
      return of([]);
    }
    return this.http.get<User[]>(`${this.serviceUrl}/?name=${term}`)
      .pipe(
        retry(3),
        // tap(_ => this.log(`found users matching "${term}"`)),
        catchError(this.handleError<User[]>('searchUsers', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // Log a UserService message with the MessageService
  private log(message: string) {
    this.messageService.add(`UserService: ${message}`);
  }
}
