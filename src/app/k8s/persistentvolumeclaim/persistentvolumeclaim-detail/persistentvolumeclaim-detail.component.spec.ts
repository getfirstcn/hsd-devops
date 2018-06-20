import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersistentvolumeclaimDetailComponent } from './persistentvolumeclaim-detail.component';

describe('PersistentvolumeclaimDetailComponent', () => {
  let component: PersistentvolumeclaimDetailComponent;
  let fixture: ComponentFixture<PersistentvolumeclaimDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersistentvolumeclaimDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersistentvolumeclaimDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
