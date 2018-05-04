import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplicationControllersComponent } from './replication-controllers.component';

describe('ReplicationControllersComponent', () => {
  let component: ReplicationControllersComponent;
  let fixture: ComponentFixture<ReplicationControllersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplicationControllersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplicationControllersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
