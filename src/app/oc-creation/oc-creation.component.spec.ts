import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcCreationComponent } from './oc-creation.component';

describe('OcCreationComponent', () => {
  let component: OcCreationComponent;
  let fixture: ComponentFixture<OcCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
