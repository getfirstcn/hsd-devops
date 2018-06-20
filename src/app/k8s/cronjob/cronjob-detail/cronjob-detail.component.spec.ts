import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CronjobDetailComponent } from './cronjob-detail.component';

describe('CronjobDetailComponent', () => {
  let component: CronjobDetailComponent;
  let fixture: ComponentFixture<CronjobDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CronjobDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CronjobDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
