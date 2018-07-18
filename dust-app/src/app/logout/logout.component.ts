import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MessageService } from '../messages/message.service';

import { slideInDownAnimation } from '../animations';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
  animations: [slideInDownAnimation]
})
export class LogoutComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  constructor(
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.logout();
    // this.router.navigate(['/']);

    setTimeout(() => {
      // Providing a `null` value to the named outlet
      // clears the contents of the named outlet
      this.router.navigate([{ outlets: { popup: null } }]);
    }, 1000);
  }

  gotoDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
