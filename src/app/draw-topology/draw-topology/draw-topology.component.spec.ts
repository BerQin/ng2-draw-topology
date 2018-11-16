import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawTopologyComponent } from './draw-topology.component';

describe('DrawTopologyComponent', () => {
  let component: DrawTopologyComponent;
  let fixture: ComponentFixture<DrawTopologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawTopologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawTopologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
