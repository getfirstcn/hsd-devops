import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAllComponent } from './service-all.component';

describe('ServiceAllComponent', () => {
  let component: ServiceAllComponent;
  let fixture: ComponentFixture<ServiceAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
