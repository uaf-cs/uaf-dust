import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  isAdmin = false;
  isTechnician = false;
  bisLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
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
        this.isAdmin = true;
        this.isTechnician = true;
        this.bisLoggedIn.next(this.isLoggedIn);
        this.signedInUser = 'somebody';
        this.signedInUserId = 21;
      })
    );
  }

  logout(): void {
    this.isLoggedIn = false;
    this.isAdmin = false;
    this.isTechnician = false;
    this.bisLoggedIn.next(this.isLoggedIn);
    this.signedInUser = 'nobody';
    this.signedInUserId = 0;
  }

  constructor() { }
}
