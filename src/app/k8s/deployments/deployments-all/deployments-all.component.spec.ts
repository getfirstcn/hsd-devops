import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeploymentsAllComponent } from './deployments-all.component';

describe('DeploymentsAllComponent', () => {
  let component: DeploymentsAllComponent;
  let fixture: ComponentFixture<DeploymentsAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeploymentsAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeploymentsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
