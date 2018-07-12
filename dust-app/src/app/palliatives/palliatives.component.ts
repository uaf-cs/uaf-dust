import { Component, OnInit } from '@angular/core';
import { Palliative } from '../palliative';
import { PalliativeService } from '../palliative.service';

@Component({
  selector: 'app-palliatives',
  templateUrl: './palliatives.component.html',
  styleUrls: ['./palliatives.component.css']
})
export class PalliativesComponent implements OnInit {
  palliatives: Palliative[];

  constructor(private palliativeService: PalliativeService) { }

  ngOnInit() {
    this.getPalliatives();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.palliativeService.addPalliative({ id: null, shortname: name } as Palliative)
      .subscribe(palliative => {
        this.palliatives.push(palliative);
      });
  }

  delete(palliative: Palliative): void {
    this.palliatives = this.palliatives.filter(h => h !== palliative);
    this.palliativeService.deletePalliative(palliative).subscribe();
  }

  getPalliatives(): void {
    this.palliativeService.getPalliatives().subscribe(palliatives => this.palliatives = palliatives);
  }
}
