import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';

import { UsersRoutingModule } from './user-area/users-routing.module';
import { UserListComponent } from './user-area/user-list/user-list.component';
import { UserDetailComponent } from './user-area/user-detail/user-detail.component';
import { UserSearchComponent } from './user-area/user-search/user-search.component';

import { PalliativeListComponent } from './palliative-area/palliative-list/palliative-list.component';
import { PalliativeDetailComponent } from './palliative-area/palliative-detail/palliative-detail.component';
import { PalliativeSearchComponent } from './palliative-area/palliative-search/palliative-search.component';
import { PageNotFoundComponent } from './not-found.component';
import { PalliativesRoutingModule } from './palliative-area/palliatives-routing.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';
import { LogoutComponent } from './logout/logout.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    UserListComponent,
    UserDetailComponent,
    MessagesComponent,
    UserSearchComponent,
    PalliativeListComponent,
    PalliativeDetailComponent,
    PalliativeSearchComponent,
    LoginComponent,
    AuthComponent,
    LogoutComponent,
    HelpComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    UsersRoutingModule,
    PalliativesRoutingModule,
    AdminRoutingModule,
    AppRoutingModule,
    AdminModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
