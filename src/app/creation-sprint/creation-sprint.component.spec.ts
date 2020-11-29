import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationSprintComponent } from './creation-sprint.component';

describe('CreationSprintComponent', () => {
  let component: CreationSprintComponent;
  let fixture: ComponentFixture<CreationSprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationSprintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationSprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
