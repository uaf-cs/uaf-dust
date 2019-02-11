import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../messages/message.service';
import { Palliative } from './palliative';
import { PalliativesUrl, DevServiceUrl, PhpServiceUrl, BaseServiceUrl } from '../serviceUrls';
import { AuthService } from '../auth.service';

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
    private messageService: MessageService,
    private authService: AuthService
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
      retry(3),
      // tap(_ => this.log(`fetched palliative id=${id}`)),
      catchError(this.handleError<Palliative>(`getPalliative id=${id}`))
    );
  }

  getPalliatives(): Observable<Palliative[]> {
    return this.http.get<Palliative[]>(this.serviceUrl)
      .pipe(
        retry(3),
        tap(palliatives => {
          // this.log('fetched palliatives');
          // console.log(palliatives);
        }),
        catchError(this.handleError('getPalliatives', []))
      );
  }

  /** PUT: update the palliative on the server */
  updatePalliative(palliative: Palliative): Observable<any> {
    let formdata = new FormData();
    formdata.append('session', this.authService.session);
    formdata.append('method', 'PUT');
    formdata.append('data', JSON.stringify(palliative));
    return this.http.post(this.serviceUrl + `/${palliative.id}`, formdata).pipe(
      // retry(3),
      // tap(_ => this.log(`updated palliative id=${palliative.id}`)),
      catchError(this.handleError<any>('updatePalliative'))
    );
  }

  /** POST: add a new palliative to the server */
  addPalliative(palliative: Palliative): Observable<Palliative> {
    let formdata = new FormData();
    formdata.append('session', this.authService.session);
    formdata.append('method', 'POST');
    formdata.append('data', JSON.stringify(palliative));
    return this.http.post<Palliative>(this.serviceUrl, formdata).pipe(
      // tap((_palliative: Palliative) => this.log(`added palliative w/ id=${_palliative.id}`)),
      catchError(this.handleError<Palliative>('addPalliative'))
    );
  }

  /** DELETE: delete the palliative from the server */
  deletePalliative(palliative: Palliative | number): Observable<Palliative> {
    const id = typeof palliative === 'number' ? palliative : palliative.id;
    const url = `${this.serviceUrl}/${id}`;

    let formdata = new FormData();
    formdata.append('session', this.authService.session);
    formdata.append('method', 'DELETE');
    formdata.append('data', JSON.stringify({"id": id}));

    return this.http.post<Palliative>(url, formdata).pipe(
      retry(3),
      // tap(_ => this.log(`deleted palliative id=${id}`)),
      catchError(this.handleError<Palliative>('deletePalliative'))
    );
  }

  /** GET palliatives whose name contains search term */
  searchPalliatives(term: string): Observable<Palliative[]> {
    if (!term.trim()) {
      // if not search term, return empty palliative array
      return of([]);
    }
    return this.http.get<Palliative[]>(`${this.serviceUrl}/?shortname=${term}%`)
      .pipe(
        retry(3),
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
