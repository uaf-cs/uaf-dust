import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { UserService } from '../user-area/user.service';
import { User } from '../user-area/user';
import { PalliativeService } from '../palliative-area/palliative.service';
import { Palliative } from '../palliative-area/palliative';

@Component({
    selector: 'app-admin-manage-palliatives',
    templateUrl: 'manage-palliatives.component.html',
    styleUrls: [ 'admin.component.css' ]
})
export class ManagePalliativesComponent implements OnInit {
    palliatives$: Observable<Palliative[]>;
    selectedId = 0;

    constructor(
        private palliativeService: PalliativeService,
        private userService: UserService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.palliatives$ = this.palliativeService.getPalliatives();
        this.palliatives$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) => {
                this.selectedId = +params.get('id');
                return this.palliativeService.getPalliatives();
            })
        );
    }

    gotoDashboard() {
        this.router.navigate([ './' ]);
    }
}
