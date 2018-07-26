import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Palliative, DustColumnDataPoint, DustColumnGraphType } from '../palliative';
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
  graphVisible = false;
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
    setTimeout(() => {
      if (this.palliative.mprt === null) {
        this.calcMPRT();
      }
      this.plotGraph();
    }, 500);
  }

  hideGraph() {
    this.graphVisible = false;
  }

  plotGraph() {
    if (!this.graphVisible)
      return;
    let e: HTMLDivElement;
    // let trace1 = {
    //   x: [],
    //   y: [],
    //   mode: 'lines',
    //   type: 'scatter'
    // };

    // for (let element of this.palliative.data) {
    //   trace1.x.push(element.t);
    //   trace1.y.push(element.C);
    // }

    // let xys = this.palliative.getXYs(DustColumnGraphType.Concentration, 'lines', 'scatter');
    // trace1.x = xys.x;
    // trace1.y = xys.y;
    if (!(this.palliative instanceof Palliative)) {
      this.palliative = Palliative.CreateFromJSON(this.palliative);
    }

    let graphs = [
      { id: 'mprtGraphC', type: DustColumnGraphType.Concentration },
      { id: 'mprtGraphLnC', type: DustColumnGraphType.LnC },
      { id: 'mprtGraphDeriv1', type: DustColumnGraphType.dCdt },
      { id: 'mprtGraphDeriv2', type: DustColumnGraphType.Deriv2 },
      { id: 'mprtGraphRSQ', type: DustColumnGraphType.RSQ }
    ];
    for (let g of graphs) {
      let data = this.palliative.getXYs(g.type, 'lines', 'scatter');
      let layout = this.palliative.getLayout(g.type);
      e = <HTMLDivElement>document.getElementById(g.id);
      Plotly.plot(e, data, layout);
    }


    // let layout = {
    //   xaxis: {
    //     title: 'time (t)'
    //   },
    //   yaxis: {
    //     title: 'Concentration (C)'
    //   },
    //   title: 'Mean Particle Residence Time'
    // };

  }

  calcMPRT() {
    let p = new Palliative();
    for (let value of this.palliative.data) {
      p.data.push(new DustColumnDataPoint(value.t, value.C));
    }
    p.calcMPRT();
    this.palliative.data = p.data;
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
