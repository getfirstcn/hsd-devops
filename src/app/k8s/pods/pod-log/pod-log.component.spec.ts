import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodLogComponent } from './pod-log.component';

describe('PodLogComponent', () => {
  let component: PodLogComponent;
  let fixture: ComponentFixture<PodLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
