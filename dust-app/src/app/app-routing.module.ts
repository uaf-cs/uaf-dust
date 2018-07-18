import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './user-area/user-list/user-list.component';
import { UserDetailComponent } from './user-area/user-detail/user-detail.component';
import { PalliativeListComponent } from './palliative-area/palliative-list/palliative-list.component';
import { PalliativeDetailComponent } from './palliative-area/palliative-detail/palliative-detail.component';
import { PageNotFoundComponent } from './not-found.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  // { path: 'users', component: UserListComponent },
  // { path: 'users/detail/:id', component: UserDetailComponent },
  // { path: 'palliatives', component: PalliativeListComponent },
  // { path: 'palliatives/detail/:id', component: PalliativeDetailComponent },
  { path: 'login', component: LoginComponent, outlet: 'popup' },
  { path: 'logout', component: LogoutComponent, outlet: 'popup' },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
  // { path: 'login', component: AuthComponent, outlet: 'popup' },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
