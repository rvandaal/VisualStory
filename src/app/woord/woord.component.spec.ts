import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WoordComponent } from './woord.component';

describe('WoordComponent', () => {
  let component: WoordComponent;
  let fixture: ComponentFixture<WoordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WoordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
