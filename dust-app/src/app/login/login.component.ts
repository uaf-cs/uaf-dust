import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

import { slideInDownAnimation } from '../animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [slideInDownAnimation]
})
export class LoginComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  message = 'not set';

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
    this.setMessage();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';

    this.authService.login().subscribe(() => {
      this.setMessage();

      setTimeout(() => {
        // Providing a `null` value to the named outlet
        // clears the contents of the named outlet
        this.router.navigate([{ outlets: { popup: null } }]);
      }, 1000);

      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';

        // Redirect the user
        this.router.navigate([redirect]);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

  cancel() {
    this.closePopup();
  }

  closePopup() {
    // Providing a `null` value to the named outlet
    // clears the contents of the named outlet
    this.router.navigate([{ outlets: { popup: null } }]);
  }
}
