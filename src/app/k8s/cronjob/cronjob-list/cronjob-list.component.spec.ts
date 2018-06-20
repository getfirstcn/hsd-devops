import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CronjobListComponent } from './cronjob-list.component';

describe('CronjobListComponent', () => {
  let component: CronjobListComponent;
  let fixture: ComponentFixture<CronjobListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CronjobListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CronjobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
