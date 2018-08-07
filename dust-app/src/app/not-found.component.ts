import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template: '<h2>Page not found</h2><button (click)="gotoHome()">back to home</button>'
})
export class PageNotFoundComponent {
    constructor(private router: Router) { }

    gotoHome() {
        this.router.navigate([ '/' ]);
    }
}
