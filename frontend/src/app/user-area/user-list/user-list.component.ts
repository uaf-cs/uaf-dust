import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { User } from '../user';
import { UserService } from '../user.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  theUsers: User[];
  users$: Observable<User[]>;
  private selectedId: number;

  constructor(
    private service: UserService,
    private route: ActivatedRoute,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.getUsers();
    // this.users$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) => {
    //     // + causes the returned string to be converted to a number
    //     this.selectedId = +params.get('id');
    //     return this.service.getUsers();
    //   })
    // );
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.service.addUser(new User(0, name))
      .subscribe(user => {
        this.getUsers();
      });
  }

  delete(user: User): void {
    this.theUsers = this.theUsers.filter(h => h !== user);
    this.service.deleteUser(user).subscribe(() => {
      this.getUsers();
    });
  }

  getUsers(): void {
    this.users$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        // + causes the returned string to be converted to a number
        this.selectedId = +params.get('id');
        return this.service.getUsers();
      })
    );
    this.users$.subscribe(users => this.theUsers = users);
    // this.service.getUsers().subscribe(users => this.theUsers = users);
  }
}

