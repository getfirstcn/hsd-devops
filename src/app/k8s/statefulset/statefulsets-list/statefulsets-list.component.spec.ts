import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatefulsetsListComponent } from './statefulsets-list.component';

describe('StatefulsetsListComponent', () => {
  let component: StatefulsetsListComponent;
  let fixture: ComponentFixture<StatefulsetsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatefulsetsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatefulsetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
