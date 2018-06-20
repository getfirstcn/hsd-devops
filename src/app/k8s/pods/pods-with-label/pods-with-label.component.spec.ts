import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodsWithLabelComponent } from './pods-with-label.component';

describe('PodsWithLabelComponent', () => {
  let component: PodsWithLabelComponent;
  let fixture: ComponentFixture<PodsWithLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodsWithLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodsWithLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
