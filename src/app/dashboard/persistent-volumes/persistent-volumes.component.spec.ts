import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersistentVolumesComponent } from './persistent-volumes.component';

describe('PersistentVolumesComponent', () => {
  let component: PersistentVolumesComponent;
  let fixture: ComponentFixture<PersistentVolumesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersistentVolumesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersistentVolumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
