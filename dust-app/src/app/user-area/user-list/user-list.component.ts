import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
  users$: Observable<User[]>;
  private selectedId: number;

  constructor(
    private service: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.getUsers();
    this.users$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        // + causes the returned string to be converted to a number
        this.selectedId = +params.get('id');
        return this.service.getUsers();
      })
    );
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.service.addUser({ id: null, username: name } as User)
      .subscribe(user => {
        this.users.push(user);
      });
  }

  delete(user: User): void {
    this.users = this.users.filter(h => h !== user);
    this.service.deleteUser(user).subscribe();
  }

  getUsers(): void {
    this.service.getUsers().subscribe(users => this.users = users);
  }
}

