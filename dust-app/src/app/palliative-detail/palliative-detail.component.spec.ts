import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalliativeDetailComponent } from './palliative-detail.component';

describe('PalliativeDetailComponent', () => {
  let component: PalliativeDetailComponent;
  let fixture: ComponentFixture<PalliativeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalliativeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalliativeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
