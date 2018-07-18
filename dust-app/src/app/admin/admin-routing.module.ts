import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { AuthGuardService } from '../auth-guard.service';

import { AdminComponent } from './admin.component';
import { ManageUsersComponent } from './manage-users.component';
import { ManagePalliativesComponent } from './manage-palliatives.component';
import { AdminDashboardComponent } from './admin-dashboard.component';

const adminRoutes: Routes = [
    {
        path: 'admin', component: AdminComponent,
        canActivate: [ AuthGuardService ],
        children: [
            {
                path: '',
                canActivateChild: [ AuthGuardService ],
                children: [
                    { path: 'dashboard', component: AdminDashboardComponent },
                    { path: 'users', component: ManageUsersComponent },
                    { path: 'palliatives', component: ManagePalliativesComponent },
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule { }
