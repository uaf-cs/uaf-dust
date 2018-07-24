import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Palliative, DustColumnDataPoint } from '../palliative';
import { PalliativeService } from '../palliative.service';
import { User } from '../../user-area/user';
import { UserService } from '../../user-area/user.service';
// import * as Plotly from 'plotly.js';
declare var Plotly: any;

@Component({
  selector: 'app-palliative-detail',
  templateUrl: './palliative-detail.component.html',
  styleUrls: ['./palliative-detail.component.css']
})
export class PalliativeDetailComponent implements OnInit {
  @Input() palliative: Palliative;
  @Input() user: User;
  dataVisible = false;
  graphVisible = true;
  textboxText = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private palliativeService: PalliativeService,
    private userService: UserService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPalliative();
  }

  getUser(): void {
    if (this.palliative && this.palliative.userid > 0) {
      this.userService.getUser(this.palliative.userid).subscribe(user => this.user = user);
    }
  }

  getPalliative(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.palliativeService.getPalliative(id).subscribe(palliative => {
      this.palliative = palliative;
      this.getUser();
    });
  }

  addDatapoint(): void {
    if (!(this.palliative.data instanceof Array)) {
      this.palliative.data = [];
    }
    this.palliative.data.push(new DustColumnDataPoint());
  }

  save(): void {
    this.palliativeService.updatePalliative(this.palliative)
      .subscribe(() => this.gotoPalliatives());
  }

  goBack(): void {
    this.location.back();
  }

  gotoPalliatives(): void {
    this.router.navigate(['/palliatives']);
  }

  cancel(): void {
    this.gotoPalliatives();
  }

  showData() {
    this.dataVisible = true;
  }

  hideData() {
    this.dataVisible = false;
  }

  showGraph() {
    this.graphVisible = true;
  }

  hideGraph() {
    this.graphVisible = false;    
  }

  plotGraph() {
    if (!this.graphVisible)
      return;
    let e = <HTMLDivElement>document.getElementById('mprtGraphDiv');
    let trace1 = {
      x: [],
      y: [],
      mode: 'lines',
      type: 'scatter'
    };

    for (let element of this.palliative.data) {
      trace1.x.push(element.t);
      trace1.y.push(element.C);
    }

    let data = [trace1];

    let layout = {
      xaxis: {
        title: 'time (t)'
      },
      yaxis: {
        title: 'Concentration (C)'
      },
      title: 'Mean Particle Residence Time'
    };

    Plotly.plot(e, data, layout);
  }

  calcMPRT() {
    let p = new Palliative();
    for (let value of this.palliative.data) {
      p.data.push(new DustColumnDataPoint(value.t, value.C));
    }
    p.calcMPRT();
    this.palliative.mprt = p.mprt;
    this.palliative.mprtTime = p.mprtTime;
  }

  cleanData() {
    let p = new Palliative();
    for (let value of this.palliative.data) {
      p.data.push(new DustColumnDataPoint(value.t, value.C));
    }
    p.cleanData();
    this.palliative.data = p.data;
  }

  importCSV() {
    let p = new Palliative();
    p.importFromCSV(this.textboxText);
    this.palliative.data = p.data;
  }
}
