import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeploymentsDetailComponent } from './deployments-detail.component';

describe('DeploymentsDetailComponent', () => {
  let component: DeploymentsDetailComponent;
  let fixture: ComponentFixture<DeploymentsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeploymentsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeploymentsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
