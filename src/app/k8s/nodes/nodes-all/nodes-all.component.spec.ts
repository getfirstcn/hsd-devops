import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodesAllComponent } from './nodes-all.component';

describe('NodesAllComponent', () => {
  let component: NodesAllComponent;
  let fixture: ComponentFixture<NodesAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodesAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodesAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
