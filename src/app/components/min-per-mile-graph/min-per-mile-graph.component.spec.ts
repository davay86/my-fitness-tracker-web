import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinPerMileGraphComponent } from './min-per-mile-graph.component';

describe('MinPerMileGraphComponent', () => {
  let component: MinPerMileGraphComponent;
  let fixture: ComponentFixture<MinPerMileGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinPerMileGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinPerMileGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
