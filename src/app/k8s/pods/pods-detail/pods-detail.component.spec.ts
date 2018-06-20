import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodsDetailComponent } from './pods-detail.component';

describe('PodsDetailComponent', () => {
  let component: PodsDetailComponent;
  let fixture: ComponentFixture<PodsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
