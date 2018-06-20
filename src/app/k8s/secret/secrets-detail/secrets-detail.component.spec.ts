import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretsDetailComponent } from './secrets-detail.component';

describe('SecretsDetailComponent', () => {
  let component: SecretsDetailComponent;
  let fixture: ComponentFixture<SecretsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
