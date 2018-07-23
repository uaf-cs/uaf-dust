import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() user: User;
  user$: Observable<User>;
  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UserService,
    private location: Location
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.user$ = this.service.getUser(id);
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getUser(id).subscribe(user => this.user = user);
  }

  save(): void {
    this.service.updateUser(this.user)
      .subscribe(() => {
        // this.goBack()
        this.getUser();
      });
  }

  gotoUsers(user: User) {
    const userId = user ? user.id : null;
    this.router.navigate(['/users', { id: userId } ]);
  }

  goBack(): void {
    this.location.back();
  }
}
