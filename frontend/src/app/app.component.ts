import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { SplashscreenService } from './splashscreen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dust Palliative MPRT Calculator';
  signedInUser = 'nobody';

  constructor(public authService: AuthService,
    public splashscreenService: SplashscreenService) { }

  ngOnInit() {
    this.signedInUser = (this.authService.isLoggedIn ? 'somebody' : 'Log in');
  }
}
