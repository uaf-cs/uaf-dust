import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DustDBService } from '../dustdb.service';

@Component({
    selector: 'app-admin-dashboard',
    templateUrl: 'admin-dashboard.component.html',
    styleUrls: [ 'admin.component.css' ]
})
export class AdminDashboardComponent {
    constructor(
        private dustdbService: DustDBService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    initializeDB() {
        this.dustdbService.initializeDB();
    }
}
