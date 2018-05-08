import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigMapDetailComponent } from './config-map-detail.component';

describe('ConfigMapDetailComponent', () => {
  let component: ConfigMapDetailComponent;
  let fixture: ComponentFixture<ConfigMapDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigMapDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigMapDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
