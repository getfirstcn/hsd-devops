import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersistentVolumeClaimsComponent } from './persistent-volume-claims.component';

describe('PersistentVolumeClaimsComponent', () => {
  let component: PersistentVolumeClaimsComponent;
  let fixture: ComponentFixture<PersistentVolumeClaimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersistentVolumeClaimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersistentVolumeClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
