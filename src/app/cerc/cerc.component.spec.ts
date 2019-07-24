import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CercComponent } from './cerc.component';

describe('CercComponent', () => {
  let component: CercComponent;
  let fixture: ComponentFixture<CercComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CercComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CercComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
