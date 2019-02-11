import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { PalliativeListComponent } from './palliative-list/palliative-list.component';
import { PalliativeDetailComponent } from './palliative-detail/palliative-detail.component';

const palliativesRoutes: Routes = [
    { path: 'palliatives', component: PalliativeListComponent },
    { path: 'palliatives/detail/:id', component: PalliativeDetailComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(palliativesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PalliativesRoutingModule { }
