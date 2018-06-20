import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngressesAllComponent } from './ingresses-all.component';

describe('IngressesAllComponent', () => {
  let component: IngressesAllComponent;
  let fixture: ComponentFixture<IngressesAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngressesAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngressesAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
