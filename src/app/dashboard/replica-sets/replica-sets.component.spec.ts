import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplicaSetsComponent } from './replica-sets.component';

describe('ReplicaSetsComponent', () => {
  let component: ReplicaSetsComponent;
  let fixture: ComponentFixture<ReplicaSetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplicaSetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplicaSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
