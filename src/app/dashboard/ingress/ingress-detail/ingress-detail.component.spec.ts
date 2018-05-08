import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngressDetailComponent } from './ingress-detail.component';

describe('IngressDetailComponent', () => {
  let component: IngressDetailComponent;
  let fixture: ComponentFixture<IngressDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngressDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngressDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
