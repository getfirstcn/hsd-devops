import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngressReplaceComponent } from './ingress-replace.component';

describe('IngressReplaceComponent', () => {
  let component: IngressReplaceComponent;
  let fixture: ComponentFixture<IngressReplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngressReplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngressReplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
