import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigMapsComponent } from './config-maps.component';

describe('ConfigMapsComponent', () => {
  let component: ConfigMapsComponent;
  let fixture: ComponentFixture<ConfigMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
