import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngressesReplaceComponent } from './ingresses-replace.component';

describe('IngressesReplaceComponent', () => {
  let component: IngressesReplaceComponent;
  let fixture: ComponentFixture<IngressesReplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngressesReplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngressesReplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
