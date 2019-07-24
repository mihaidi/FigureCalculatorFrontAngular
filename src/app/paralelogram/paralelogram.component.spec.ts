import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParalelogramComponent } from './paralelogram.component';

describe('ParalelogramComponent', () => {
  let component: ParalelogramComponent;
  let fixture: ComponentFixture<ParalelogramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParalelogramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParalelogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
