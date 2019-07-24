import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoligonComponent } from './poligon.component';

describe('PoligonComponent', () => {
  let component: PoligonComponent;
  let fixture: ComponentFixture<PoligonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoligonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoligonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
