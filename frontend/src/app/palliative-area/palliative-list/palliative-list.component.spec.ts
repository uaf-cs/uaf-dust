import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalliativeListComponent } from './palliative-list.component';

describe('PalliativeListComponent', () => {
  let component: PalliativeListComponent;
  let fixture: ComponentFixture<PalliativeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalliativeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalliativeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
