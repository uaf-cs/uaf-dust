import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MessageService } from './messages/message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export class DustDBServiceRequest {
  constructor(
    public request = '',
    public result = '',
    public token = ''
  ) { }
};

@Injectable({
  providedIn: 'root'
})
export class DustDBService {
  private url = 'http://localhost:8000/admin.php';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  /**
   * Send POST message to initialize database
   * This will probably be deprecated as soon as other services are finalized.
   */
  initializeDB() {
    this.log('POSTing initialize request');
    let status = new DustDBServiceRequest('initialize');
    this.http.post<DustDBServiceRequest>(this.url, status, httpOptions).pipe(
      tap((status: DustDBServiceRequest) => this.log(`${this.url} replied with ${status.result}`)),
      catchError(this.handleError<DustDBServiceRequest>('initializeDB'))
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

  /**
   * Log a UserService message with the MessageService.
   * @param message - message to print to message service
   */
  private log(message: string) {
    this.messageService.add(`DustDBService: ${message}`);
  }
}
