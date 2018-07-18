import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template: '<h2>Page not found</h2><button (click)="gotoDashboard()">back to dashboard</button>'
})
export class PageNotFoundComponent {
    constructor(private router: Router) { }

    gotoDashboard() {
        this.router.navigate([ '/dashboard' ]);
    }
}
