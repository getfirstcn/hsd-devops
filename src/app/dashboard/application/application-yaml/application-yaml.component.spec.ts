import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationYamlComponent } from './application-yaml.component';

describe('ApplicationYamlComponent', () => {
  let component: ApplicationYamlComponent;
  let fixture: ComponentFixture<ApplicationYamlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationYamlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationYamlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
