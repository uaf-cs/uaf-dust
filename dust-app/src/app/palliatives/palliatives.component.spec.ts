import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalliativesComponent } from './palliatives.component';

describe('PalliativesComponent', () => {
  let component: PalliativesComponent;
  let fixture: ComponentFixture<PalliativesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalliativesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalliativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
