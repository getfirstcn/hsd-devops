import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigmapDetailComponent } from './configmap-detail.component';

describe('ConfigmapDetailComponent', () => {
  let component: ConfigmapDetailComponent;
  let fixture: ComponentFixture<ConfigmapDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigmapDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigmapDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
