import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalliativeSearchComponent } from './palliative-search.component';

describe('PalliativeSearchComponent', () => {
  let component: PalliativeSearchComponent;
  let fixture: ComponentFixture<PalliativeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalliativeSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalliativeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
