import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './user-area/user-list/user-list.component';
import { UserDetailComponent } from './user-area/user-detail/user-detail.component';
import { PalliativeListComponent } from './palliative-area/palliative-list/palliative-list.component';
import { PalliativeDetailComponent } from './palliative-area/palliative-detail/palliative-detail.component';
import { PageNotFoundComponent } from './not-found.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'help', component: HelpComponent },
  { path: 'login', component: LoginComponent, outlet: 'popup' },
  { path: 'logout', component: LogoutComponent, outlet: 'popup' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}) ]
})
export class AppRoutingModule { }
