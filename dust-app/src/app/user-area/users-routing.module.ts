import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const usersRoutes: Routes = [
    { path: 'users', component: UserListComponent },
    { path: 'users/detail/:id', component: UserDetailComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(usersRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class UsersRoutingModule { }
