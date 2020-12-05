import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSprintComponent } from './dashboard-sprint.component';

describe('DashboardSprintComponent', () => {
  let component: DashboardSprintComponent;
  let fixture: ComponentFixture<DashboardSprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSprintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
