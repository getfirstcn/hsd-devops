import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamespacesAllComponent } from './namespaces-all.component';

describe('NamespacesAllComponent', () => {
  let component: NamespacesAllComponent;
  let fixture: ComponentFixture<NamespacesAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamespacesAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamespacesAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
