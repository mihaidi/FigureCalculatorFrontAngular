import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriunghiComponent } from './triunghi.component';

describe('TriunghiComponent', () => {
  let component: TriunghiComponent;
  let fixture: ComponentFixture<TriunghiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriunghiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriunghiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
