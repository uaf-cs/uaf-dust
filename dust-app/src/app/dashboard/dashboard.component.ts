import { Component, OnInit } from '@angular/core';
import { User } from '../user-area/user';
import { UserService } from '../user-area/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users.slice(1, 5));
  }
}
