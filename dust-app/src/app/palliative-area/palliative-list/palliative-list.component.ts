import { Component, OnInit } from '@angular/core';
import { Palliative } from '../palliative';
import { PalliativeService } from '../palliative.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-palliative-list',
  templateUrl: './palliative-list.component.html',
  styleUrls: ['./palliative-list.component.css']
})
export class PalliativeListComponent implements OnInit {
  palliatives: Palliative[];
  private selectedId: number;

  constructor(
    private palliativeService: PalliativeService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getPalliatives();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.palliativeService.addPalliative({ id: null, shortname: name } as Palliative)
      .subscribe(palliative => {
        this.getPalliatives();
      });
  }

  delete(palliative: Palliative): void {
    this.palliativeService.deletePalliative(palliative).subscribe(() => {
      this.getPalliatives();
    });
  }

  getPalliatives(): void {
    this.palliativeService.getPalliatives().subscribe(palliatives => this.palliatives = palliatives);
  }
}
