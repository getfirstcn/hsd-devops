import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeploymentReplaceComponent } from './deployment-replace.component';

describe('DeploymentReplaceComponent', () => {
  let component: DeploymentReplaceComponent;
  let fixture: ComponentFixture<DeploymentReplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeploymentReplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeploymentReplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
