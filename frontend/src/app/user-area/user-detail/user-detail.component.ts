import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

import { User } from '../user';
import { UserService } from '../user.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() user: User;
  user$: Observable<User>;
  theUser: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UserService,
    private location: Location,
    private authService: AuthService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.user$ = this.service.getUser(id);
    this.user$.subscribe(user => {
      this.theUser = user;
    });
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getUser(id).subscribe(user => this.theUser = user);
  }

  save(): void {
    this.service.updateUser(this.theUser)
      .subscribe(() => {
        this.getUser();
      });
  }

  gotoUsers(user: User) {
    const userId = user ? user.userid : null;
    this.router.navigate(['/users', { id: userId } ]);
  }

  goBack() {
    this.router.navigate(['/users', { id: this.theUser.userid } ]);
  }

  // goBack(): void {
  //   this.location.back();
  // }
}
