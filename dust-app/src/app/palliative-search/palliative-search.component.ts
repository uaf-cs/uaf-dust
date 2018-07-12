import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Palliative } from '../palliative';
import { PalliativeService } from '../palliative.service';

@Component({
  selector: 'app-palliative-search',
  templateUrl: './palliative-search.component.html',
  styleUrls: ['./palliative-search.component.css']
})
export class PalliativeSearchComponent implements OnInit {
  palliatives$: Observable<Palliative[]>;
  private searchTerms = new Subject<string>();

  constructor(private palliativeService: PalliativeService) { }

  ngOnInit() {
    this.palliatives$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
      // ignore new term if same as previous term,
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((term: string) =>
        this.palliativeService.searchPalliatives(term))
    );
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }
}
