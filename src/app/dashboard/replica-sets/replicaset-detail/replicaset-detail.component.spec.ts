import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplicasetDetailComponent } from './replicaset-detail.component';

describe('ReplicasetDetailComponent', () => {
  let component: ReplicasetDetailComponent;
  let fixture: ComponentFixture<ReplicasetDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplicasetDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplicasetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
