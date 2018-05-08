import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaemonSetDetailComponent } from './daemon-set-detail.component';

describe('DaemonSetDetailComponent', () => {
  let component: DaemonSetDetailComponent;
  let fixture: ComponentFixture<DaemonSetDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaemonSetDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaemonSetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
