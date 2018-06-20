import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigmapListComponent } from './configmap-list.component';

describe('ConfigmapListComponent', () => {
  let component: ConfigmapListComponent;
  let fixture: ComponentFixture<ConfigmapListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigmapListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigmapListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
