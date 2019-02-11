import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, tap, delay, retry, map } from 'rxjs/operators';
import { MessageService } from './messages/message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DevServiceUrl, PhpAdminUrl, BaseServiceUrl, PhpServiceUrl } from './serviceUrls';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

export class AuthServiceRequest {
  constructor(
    public request = '',
    public result = ''
  ) { }
};

class AuthReply {
  constructor(
    public isloggedin = false,
    public userid = 0,
    public username = 'nobody',
    public userrole = 'nobody',
    public session = ''
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  isAdmin = false;
  isTechnician = false;
  bisLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  signedInUser = 'nobody';
  signedInUserRole = 'user';
  signedInUserId = 0;
  username = '';
  password = '';
  session = '';
  private url = '';

  // store redirect URL
  redirectUrl: string;

  login(): Observable<any> {
    let formdata = new FormData();
    formdata.append('username', this.username);
    formdata.append('password', this.password);
    this.password = '';
    let url = this.url + '?login';
    return this.http.post<AuthReply>(url, formdata).pipe(
      // retry(3),
      map(response => {
        this.isLoggedIn = response.isloggedin;
        this.signedInUser = response.username;
        this.isAdmin = response.userrole == 'admin';
        this.isTechnician = true;
        this.signedInUserId = response.userid;
        this.signedInUserRole = response.userrole;
        this.session = response.session;
        this.username = '';
        this.password = '';
        this.bisLoggedIn.next(this.isLoggedIn);
        return true;
      } ),
      catchError(this.handleError<AuthReply>(`error logging in with username ${this.username}`))
    );
  }

  reset() {
    this.isLoggedIn = false;
    this.isAdmin = false;
    this.isTechnician = false;
    this.signedInUser = 'nobody';
    this.signedInUserId = 0;
    this.signedInUserRole = '';
    this.username = '';
    this.password = '';
  }

  reconnect() {
    let url = this.url + '?reconnect';
    if (this.session.length > 0) url += '&token=' + this.session;
    this.log('Reconnecting');
    this.http.get(url).subscribe((result: AuthReply) => {
      console.log("reconnect: ");
      console.log(result)
      this.session = result.session;
      this.log('Reconnected');
    });
  }

  logout() {
    let url = this.url + '?logout';
    this.session = '';
    this.log('Logging out');
    this.http.get(url).subscribe(() => {
      this.reset();
      this.log('Logged out')
    });
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {
    let url: string = window.location.href;
    if (url.search(/localhost/) >= 0) {
      this.url = DevServiceUrl + PhpServiceUrl;
    } else {
      this.url = BaseServiceUrl + PhpServiceUrl;
    }
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    this.reset();

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
    this.messageService.add(`AuthService: ${message}`);
  }
}
