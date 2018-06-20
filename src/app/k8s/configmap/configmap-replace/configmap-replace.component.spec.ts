import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigmapReplaceComponent } from './configmap-replace.component';

describe('ConfigmapReplaceComponent', () => {
  let component: ConfigmapReplaceComponent;
  let fixture: ComponentFixture<ConfigmapReplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigmapReplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigmapReplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
