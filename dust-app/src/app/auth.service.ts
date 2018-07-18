import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  signedInUser = 'nobody';
  signedInUserId = 0;
  username = 'username';
  password = 'password';

  // store redirect URL
  redirectUrl: string;

  login(): Observable<boolean> {
    return of (true).pipe(
      delay(1000),
      tap(val => {
        this.isLoggedIn = true;
        this.signedInUser = 'somebody';
        this.signedInUserId = 21;
      })
    );
  }

  logout(): void {
    this.isLoggedIn = false;
    this.signedInUser = 'nobody';
    this.signedInUserId = 0;
  }

  constructor() { }
}
