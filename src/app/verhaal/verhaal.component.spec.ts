import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerhaalComponent } from './verhaal.component';

describe('VerhaalComponent', () => {
  let component: VerhaalComponent;
  let fixture: ComponentFixture<VerhaalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerhaalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerhaalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
