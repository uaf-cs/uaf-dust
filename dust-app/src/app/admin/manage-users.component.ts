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
    selectedId = 0;

    constructor(
        private service: UserService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.users$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) => {
                this.selectedId = +params.get('id');
                return this.service.getUsers();
            })
        );
    }

    gotoDashboard() {
        this.router.navigate([ './' ], );
    }
}
