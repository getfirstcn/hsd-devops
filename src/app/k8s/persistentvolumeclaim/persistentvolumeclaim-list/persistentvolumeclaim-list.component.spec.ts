import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersistentvolumeclaimListComponent } from './persistentvolumeclaim-list.component';

describe('PersistentvolumeclaimListComponent', () => {
  let component: PersistentvolumeclaimListComponent;
  let fixture: ComponentFixture<PersistentvolumeclaimListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersistentvolumeclaimListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersistentvolumeclaimListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
