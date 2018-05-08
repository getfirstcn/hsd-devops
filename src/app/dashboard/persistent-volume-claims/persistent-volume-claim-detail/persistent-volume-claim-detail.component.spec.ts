import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersistentVolumeClaimDetailComponent } from './persistent-volume-claim-detail.component';

describe('PersistentVolumeClaimDetailComponent', () => {
  let component: PersistentVolumeClaimDetailComponent;
  let fixture: ComponentFixture<PersistentVolumeClaimDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersistentVolumeClaimDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersistentVolumeClaimDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
