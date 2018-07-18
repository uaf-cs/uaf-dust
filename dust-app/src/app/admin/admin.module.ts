import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { ManageUsersComponent } from './manage-users.component';
import { ManagePalliativesComponent } from './manage-palliatives.component';

import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    ManageUsersComponent,
    ManagePalliativesComponent,
  ]
})
export class AdminModule { }
