import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceReplaceComponent } from './service-replace.component';

describe('ServiceReplaceComponent', () => {
  let component: ServiceReplaceComponent;
  let fixture: ComponentFixture<ServiceReplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceReplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceReplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
