import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatefulsetsReplaceComponent } from './statefulsets-replace.component';

describe('StatefulsetsReplaceComponent', () => {
  let component: StatefulsetsReplaceComponent;
  let fixture: ComponentFixture<StatefulsetsReplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatefulsetsReplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatefulsetsReplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
