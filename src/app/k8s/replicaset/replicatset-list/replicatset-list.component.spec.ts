import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplicatsetListComponent } from './replicatset-list.component';

describe('ReplicatsetListComponent', () => {
  let component: ReplicatsetListComponent;
  let fixture: ComponentFixture<ReplicatsetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplicatsetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplicatsetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
