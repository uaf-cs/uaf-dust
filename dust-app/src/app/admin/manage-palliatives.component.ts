import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

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
        private service: PalliativeService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.palliatives$ = this.service.getPalliatives();
        this.palliatives$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) => {
                this.selectedId = +params.get('id');
                return this.service.getPalliatives();
            })
        );
    }

    gotoDashboard() {
        this.router.navigate([ './' ]);
    }
}
