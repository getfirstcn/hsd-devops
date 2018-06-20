import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodsAllComponent } from './pods-all.component';

describe('PodsAllComponent', () => {
  let component: PodsAllComponent;
  let fixture: ComponentFixture<PodsAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodsAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
