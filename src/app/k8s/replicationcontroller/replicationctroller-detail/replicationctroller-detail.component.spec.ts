import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplicationctrollerDetailComponent } from './replicationctroller-detail.component';

describe('ReplicationctrollerDetailComponent', () => {
  let component: ReplicationctrollerDetailComponent;
  let fixture: ComponentFixture<ReplicationctrollerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplicationctrollerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplicationctrollerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
