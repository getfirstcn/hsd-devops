import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngressesDetailComponent } from './ingresses-detail.component';

describe('IngressesDetailComponent', () => {
  let component: IngressesDetailComponent;
  let fixture: ComponentFixture<IngressesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngressesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngressesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
