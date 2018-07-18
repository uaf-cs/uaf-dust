import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-admin-dashboard',
    templateUrl: 'admin-dashboard.component.html',
    styleUrls: [ 'admin.component.css' ]
})
export class AdminDashboardComponent {
    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) { }
}
