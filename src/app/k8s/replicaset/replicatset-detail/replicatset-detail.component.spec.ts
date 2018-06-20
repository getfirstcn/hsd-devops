import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplicatsetDetailComponent } from './replicatset-detail.component';

describe('ReplicatsetDetailComponent', () => {
  let component: ReplicatsetDetailComponent;
  let fixture: ComponentFixture<ReplicatsetDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplicatsetDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplicatsetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
