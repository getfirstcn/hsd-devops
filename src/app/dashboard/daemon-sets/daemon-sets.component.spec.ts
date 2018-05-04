import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaemonSetsComponent } from './daemon-sets.component';

describe('DaemonSetsComponent', () => {
  let component: DaemonSetsComponent;
  let fixture: ComponentFixture<DaemonSetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaemonSetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaemonSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
