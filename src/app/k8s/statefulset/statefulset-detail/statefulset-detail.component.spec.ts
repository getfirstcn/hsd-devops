import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatefulsetDetailComponent } from './statefulset-detail.component';

describe('StatefulsetDetailComponent', () => {
  let component: StatefulsetDetailComponent;
  let fixture: ComponentFixture<StatefulsetDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatefulsetDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatefulsetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
