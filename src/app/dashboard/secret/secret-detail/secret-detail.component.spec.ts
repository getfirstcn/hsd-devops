import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretDetailComponent } from './secret-detail.component';

describe('SecretDetailComponent', () => {
  let component: SecretDetailComponent;
  let fixture: ComponentFixture<SecretDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
