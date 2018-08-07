import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../messages/message.service';
import { Palliative } from './palliative';
import { PalliativesUrl, DevServiceUrl, PhpServiceUrl, BaseServiceUrl } from '../serviceUrls';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PalliativeService {
  private serviceUrl = '';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {
    let url: string = window.location.href;
    if (url.search(/localhost/) >= 0) {
      this.serviceUrl = DevServiceUrl + PhpServiceUrl + PalliativesUrl;
    } else {
      this.serviceUrl = BaseServiceUrl + PhpServiceUrl + PalliativesUrl;
    }
  }

  getPalliative(id: number): Observable<Palliative> {
    const url = `${this.serviceUrl}/${id}`;
    return this.http.get<Palliative>(url).pipe(
      // tap(_ => this.log(`fetched palliative id=${id}`)),
      catchError(this.handleError<Palliative>(`getPalliative id=${id}`))
    );
  }

  getPalliatives(): Observable<Palliative[]> {
    return this.http.get<Palliative[]>(this.serviceUrl)
      .pipe(
        // tap(palliatives => this.log('fetched palliatives')),
        catchError(this.handleError('getPalliatives', []))
      );
  }

  /** PUT: update the palliative on the server */
  updatePalliative(palliative: Palliative): Observable<any> {
    return this.http.put(this.serviceUrl + `/${palliative.id}`, palliative, httpOptions).pipe(
      tap(_ => this.log(`updated palliative id=${palliative.id}`)),
      catchError(this.handleError<any>('updatePalliative'))
    );
  }

  /** POST: add a new palliative to the server */
  addPalliative(palliative: Palliative): Observable<Palliative> {
    return this.http.post<Palliative>(this.serviceUrl, palliative, httpOptions).pipe(
      tap((_palliative: Palliative) => this.log(`added palliative w/ id=${_palliative.id}`)),
      catchError(this.handleError<Palliative>('addPalliative'))
    );
  }

  /** DELETE: delete the palliative from the server */
  deletePalliative(palliative: Palliative | number): Observable<Palliative> {
    const id = typeof palliative === 'number' ? palliative : palliative.id;
    const url = `${this.serviceUrl}/${id}`;

    return this.http.delete<Palliative>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted palliative id=${id}`)),
      catchError(this.handleError<Palliative>('deletePalliative'))
    );
  }

  /** GET palliatives whose name contains search term */
  searchPalliatives(term: string): Observable<Palliative[]> {
    if (!term.trim()) {
      // if not search term, return empty palliative array
      return of([]);
    }
    return this.http.get<Palliative[]>(`${this.serviceUrl}/?shortname=${term}`)
      .pipe(
        // tap(_ => this.log(`found palliatives matching "${term}"`)),
        catchError(this.handleError<Palliative[]>('searchPalliatives', []))
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

      // TODO: better job of transforming error for palliative consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // Log a PalliativeService message with the MessageService
  private log(message: string) {
    this.messageService.add(`PalliativeService: ${message}`);
  }
}
