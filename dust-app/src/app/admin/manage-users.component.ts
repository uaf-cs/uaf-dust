import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { UserService } from '../user-area/user.service';
import { User } from '../user-area/user';

@Component({
    selector: 'app-admin-manage-users',
    templateUrl: 'manage-users.component.html',
    styleUrls: [ 'admin.component.css' ],
})
export class ManageUsersComponent implements OnInit {
    users$: Observable<User[]>;
    theUsers: User[] = [];
    selectedId = 0;

    constructor(
        private service: UserService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.getUsers();
    }

    gotoDashboard() {
        this.router.navigate([ './' ], );
    }

    getUsers() {
        this.users$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) => {
                this.selectedId = +params.get('id');
                return this.service.getUsers();
            })
        );
        this.users$.subscribe(users => this.theUsers = users);
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.service.addUser({ userid: null, username: name } as User)
          .subscribe(user => {
              this.getUsers();
              this.selectedId = user.userid;
          });
      }
    
    delete(user: User): void {
        this.theUsers = this.theUsers.filter(h => h !== user);
        this.service.deleteUser(user).subscribe(() => {
            this.getUsers();
        });
    }
}
