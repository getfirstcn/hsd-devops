import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplicationctrollerListComponent } from './replicationctroller-list.component';

describe('ReplicationctrollerListComponent', () => {
  let component: ReplicationctrollerListComponent;
  let fixture: ComponentFixture<ReplicationctrollerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplicationctrollerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplicationctrollerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
