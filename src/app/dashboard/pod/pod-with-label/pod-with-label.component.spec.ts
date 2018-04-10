import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodWithLabelComponent } from './pod-with-label.component';

describe('PodWithLabelComponent', () => {
  let component: PodWithLabelComponent;
  let fixture: ComponentFixture<PodWithLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodWithLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodWithLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
